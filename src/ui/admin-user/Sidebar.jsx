import Logo from "../common/logo/Logo";

function Sidebar() {
  return (
    <aside className="row-span-2 border-l border-l-slate-200 p-3">
      <Logo type="textLogo" className="mx-auto" />
    </aside>
  );
}

export default Sidebar;
