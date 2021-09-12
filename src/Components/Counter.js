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
    // update the props here
    const updatedProps = { ...props, count };
    //console.log(updatedProps);
    dispatch(updatedProps);
  }

  return (
    <>
      <div className="text-white">
        <button
          className="font-black mr-2 rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base"
          onClick={(e) => clickHandler(e, "INCREMENT")}
        >
          +
        </button>
        <div className="text-xl inline">{count}</div>
        <button
          className="font-black ml-2 rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base"
          onClick={(e) => clickHandler(e, "DECREMENT")}
        >
          -
        </button>

        <button
          className="font-white rounded bg-black text-base pl-2 pr-2 m-2"
          onClick={(e) => addToCart(e, count, props)}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default Counter;
