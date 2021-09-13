import { useState, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Counter({ props }) {
  const { info, dispatch, setTotalCount } = useContext(Context);
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
    const updatedProps = { ...props, count };
    let total = 0;
    for (let i = 0; i < info.length; i++) {
      if (info[i] !== undefined) total += info[i].count;
    }
    setTotalCount(total);
    dispatch(updatedProps);
  }

  return (
    <>
      <div className="text-white flex justify-between pt-1">
        <div className="flex justify-between">
          <button
            className="font-black ml-2 mt-2 rounded-full h-6 w-6 bg-gradient-to-r from-black to-purple-900"
            onClick={(e) => clickHandler(e, "DECREMENT")}
          >
            -
          </button>
          <div className="inline w-10 flex justify-center mt-1 text-lg">
            {count}
          </div>
          <button
            className="font-black rounded-full h-6 w-6 bg-gradient-to-r from-black to-purple-900 mt-2"
            onClick={(e) => clickHandler(e, "INCREMENT")}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="text-black rounded bg-gray-200 mt-1 mr-2 mb-2 p-1 px-2"
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
