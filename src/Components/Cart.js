import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Modal from "react-modal";
import HorizentalCard from "./HorizentalCard";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "80px",
    left: "39%",
    right: "0%",
    bottom: "auto",
    width: "57%",
    height: "80%",
  },
};
function Cart() {
  const { info, isModalOpen, setIsModalOpen } = useContext(Context);

  let cost = 0;
  let flag = false;

  return (
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={() => setIsModalOpen(false)}
      style={customStyles}
      htmlOpenClassName="overflow-hidden"
    >
      <button
        className="float-right -mt-4 text-3xl font-semibold"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(false);
        }}
      >
        &times;
      </button>

      <div className="main-content">
        <div className="m-10">
          {info.map((c, index) => {
            cost += c.price * c.count;
            if (cost > 0) flag = true;
            return <HorizentalCard key={index} props={c} />;
          })}
        </div>

        {(cost === 0.0 ? true : false) && (
          <div className="warning">
            <div className="flex flex-row justify-between w-3/4 m-auto mt-20 text-xl font-black text-red-900">
              <h1> Opps !! You haven't selected any product yet :( </h1>
            </div>
          </div>
        )}

        {(cost !== 0.0 ? true : false) && (
          <div className="flex flex-row justify-between w-1/2 p-2 m-auto ">
            <div className="flex justify-center w-auto px-2 py-1 text-base text-white bg-red-700 rounded shadow-2xl justipy-1">
              Total Cost : {cost.toFixed(2)} $
            </div>
            <button className="px-2 py-1 text-base text-white bg-green-700 rounded shadow-2xl">
              <Link to="/purchese"> Request To Process</Link>
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
