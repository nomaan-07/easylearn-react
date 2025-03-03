function Overlay({ onClick }) {
  return (
    <div
      className="bg-theme/5 fixed inset-0 z-50 backdrop-blur-xs lg:hidden"
      onClick={onClick}
    ></div>
  );
}

export default Overlay;
