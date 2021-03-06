import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Modal from "react-modal";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "80px",
    left: "35%",
    right: "auto",
    bottom: "auto",
    width: "65%",
    height: "80%",
  },
};
function CartList() {
  const { info, isModalOpen, setIsModalOpen } = useContext(Context);

  let cost = 0;

  return (
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={() => setIsModalOpen(false)}
      style={customStyles}
      htmlOpenClassName='overflow-hidden'
    >
      <button
        className='-mt-4 text-3xl font-semibold'
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(false);
        }}
      >
        &times;
      </button>

      <div className='main-content'>
        <div className='m-10'>
          {info.map((c, index) => {
            cost += c.price * c.count;
            return <Cart key={index} props={c} />;
          })}
        </div>

        {cost === 0 && (
          <div className='warning'>
            <div className='flex flex-row justify-between w-3/4 m-auto mt-20 text-xl font-black text-red-900'>
              <h1> Opps !! You haven't selected any product yet :( </h1>
            </div>
          </div>
        )}

        {cost !== 0 && (
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
    </Modal>
  );
}

export default CartList;
