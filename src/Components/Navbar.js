import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav class="bg-black text-white text-lg">
      <div class="flex justify-between w-11/12 m-auto">
        <div class="flex">
          <img class="w-20 h-20" src={logo} alt="logo" />
          <div class="flex flex-col justify-center"> &nbsp; EnvatoMarket</div>
        </div>
        <div class="flex flex-col justify-center">
          <button class="px-2 py-1 rounded bg-gradient-to-r from-yellow-500 to-yellow-700 text-base">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
