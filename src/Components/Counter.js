import { useState, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Counter({ props }) {
  const { dispatch } = useContext(Context);
  const [count, setCounter] = useState(0);

  function clickHandler(e, action, props) {
    e.preventDefault();
    if (action === "INCREMENT") {
      setCounter((prevState) => prevState + 1);
    }
    if (action === "DECREMENT") {
      setCounter((prevState) => prevState - 1);
    }
  }

  function addToCart(e, count, props) {
    e.preventDefault();
    setCounter(0);
    const updatedProps = { ...props, count };
    dispatch(updatedProps);
  }

  return (
    <>
      <div className="text-white flex justify-between mt-2">
        <div className="flex justify-between">
          <button
            className="font-black mr-2 rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base"
            onClick={(e) => clickHandler(e, "DECREMENT")}
          >
            -
          </button>
          <div className="text-xl inline w-7">{count}</div>

          <button
            className="font-black rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base"
            onClick={(e) => clickHandler(e, "INCREMENT")}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="font-white rounded bg-black text-base p-1 mb-1"
            onClick={(e) => addToCart(e, count, props)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
