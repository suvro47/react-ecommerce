import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Modal from "react-modal";
import HorizentalCard from "./HorizentalCard";

const customStyles = {
  content: {
    top: "112px",
    left: "2px",
    right: "0%",
    bottom: "auto",
    width: "75%",
    height: "auto",
  },
};

function Cart() {
  const { isModalOpen, setIsModalOpen } = useContext(Context);
  const { info } = useContext(Context);

  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <button
        className="float-right text-3xl -mt-4 font-semibold"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(false);
        }}
      >
        &times;
      </button>

      <div className="">
        {info.map((c, index) => (
          <HorizentalCard key={index} props={c} />
        ))}
      </div>
    </Modal>
  );
}

export default Cart;
