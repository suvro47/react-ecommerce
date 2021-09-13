import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="bg-black text-white text-lg">
      <div className="flex justify-between w-11/12 m-auto">
        <div className="flex">
          <img className="w-20 h-20" src={logo} alt="logo" />
          <div className="flex flex-col justify-center">
            &nbsp; EnvatoMarket
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button className="px-4 py-1 rounded bg-gradient-to-r from-yellow-500 to-yellow-700 text-base">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
