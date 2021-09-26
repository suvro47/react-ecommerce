import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
};

function CustomModal({ style, children }) {
  const { isModalOpen, setIsModalOpen } = useContext(Context);

  if (!isModalOpen) return null;

  return (
    <>
      <div style={overlay} onClick={() => setIsModalOpen(false)}></div>

      <div style={style} className='overflow-hidden'>
        <button
          className='-mt-4 text-3xl font-semibold'
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
          }}
        >
          &times;
        </button>
        <div> {children} </div>
      </div>
    </>
  );
}

export default CustomModal;
