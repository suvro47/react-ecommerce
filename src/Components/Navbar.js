import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalCount, setIsModalOpen } = useContext(Context);

  return (
    <nav className="text-lg text-white bg-black">
      <div className="flex justify-between w-11/12 m-auto">
        <div className="flex">
          <img className="w-20 h-20" src={logo} alt="logo" />
          <div className="flex flex-col justify-center">
            <Link to="/"> &nbsp; EgalMart </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              <button
                className="h-8 px-4 pb-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                <Badge color="secondary">
                  <ShoppingCartIcon />
                  <div className="w-6 text-base text-white bg-red-700 rounded-full">
                    {totalCount}
                  </div>
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
