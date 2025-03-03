const baseStyles =
  "hover:text-theme flex items-center justify-center rounded-sm p-2 transition-colors md:cursor-pointer";

const variationStyles = {
  panel: `${baseStyles} bg-white dark:bg-slate-800`,
  main: `${baseStyles} `,
  notification: "relative",
};

function HeaderButton({
  variation = "panel",
  className = "",
  notification,
  onClick,
  children,
}) {
  const styles = `${variationStyles[variation]} ${className} ${notification ? variationStyles["notification"] : ""}`;

  return (
    <div className={styles} role="button" onClick={onClick}>
      {children}
      {notification && (
        <span className="bg-theme absolute top-2 size-2.5 rounded-full border-2 border-white ltr:right-2.5 rtl:left-2.5 dark:border-slate-800"></span>
      )}
    </div>
  );
}

export default HeaderButton;
