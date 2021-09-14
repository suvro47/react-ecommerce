import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../assets/logo.jpg";

function Navbar() {
  const { totalCount, setIsModalOpen } = useContext(Context);

  return (
    <nav className="text-lg text-white bg-black">
      <div className="flex justify-between w-11/12 m-auto">
        <div className="flex">
          <img className="w-20 h-20" src={logo} alt="logo" />
          <div className="flex flex-col justify-center">
            &nbsp; EnvatoMarket
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center">
              <button
                className="h-8 px-4"
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
              >
                <Badge color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </button>
            </div>
            <div className="flex justify-center w-12 h-8 text-white rounded bg-gradient-to-r from-yellow-700 to-yellow-500">
              {totalCount}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
