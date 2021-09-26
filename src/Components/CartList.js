import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import CustomModal from "./CustomModal";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const customStyles = {
  top: "80px",
  left: "35%",
  right: "auto",
  bottom: "auto",
  width: "65%",
  height: "80%",
  background: "white",
  position: "fixed",
  
};

function CartList() {
  const { info } = useContext(Context);
  let cost = 0;
  return (
    <div>
      <CustomModal style={customStyles}>
        <div className='main-content'>
          <div className='m-10'>
            {info.map((c, index) => {
              cost += c.price * c.count;
              return <Cart key={index} props={c} />;
            })}
          </div>

          {!cost ? (
            <div className='warning'>
              <div className='flex flex-row justify-between w-3/4 m-auto mt-20 text-xl font-black text-red-900'>
                <h1> Opps !! You haven't selected any product yet :( </h1>
              </div>
            </div>
          ) : (
            <div className='flex flex-row justify-center w-1/2 p-2 m-auto'>
              <button
                className='px-2 py-1 mx-8 text-base text-white bg-red-700 rounded shadow-2xl'
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Clear Cart
              </button>
              <button className='px-2 py-1 text-base text-white bg-green-700 rounded shadow-2xl'>
                <Link to='/checkout'> Checkout </Link>
              </button>
            </div>
          )}
        </div>
      </CustomModal>
    </div>
  );
}

export default CartList;
