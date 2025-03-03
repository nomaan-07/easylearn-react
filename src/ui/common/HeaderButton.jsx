const baseStyles =
  "md:hover:text-theme size-10 flex items-center justify-center rounded-sm p-2 transition-colors md:cursor-pointer";

const variationStyles = {
  panel: `${baseStyles} bg-white dark:bg-slate-800`,
  main: `${baseStyles} bg-slate-100 dark:bg-slate-700`,
  notification: "relative",
};

function HeaderButton({
  variation = "panel",
  className = "",
  notification = false,
  ariaLabel = "",
  onClick,
  children,
}) {
  const styles = `${variationStyles[variation]} ${className} ${notification ? variationStyles["notification"] : ""}`;

  return (
    <button className={styles} aria-label={ariaLabel} onClick={onClick}>
      {children}
      {notification && (
        <span className="bg-theme absolute top-2 size-2.5 rounded-full border-2 border-white ltr:right-2.5 rtl:left-2.5 dark:border-slate-800"></span>
      )}
    </button>
  );
}

export default HeaderButton;
