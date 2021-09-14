import { useState, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Counter({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const [count, setCounter] = useState(1);

  function addToCart(e, count, props) {
    e.preventDefault();
    setCounter(1);

    if (info[props.id] !== undefined) {
      const updatedCount = count + info[props.id].count;
      console.log(updatedCount);
      const updatedProps = { ...props, count: updatedCount };
      setTotalCount((prev) => prev + count);
      info[updatedProps.id] = updatedProps;
      setInfo(info);
    } else {
      const updatedProps = { ...props, count };
      setTotalCount((prev) => prev + updatedProps.count);
      info[updatedProps.id] = updatedProps;
      setInfo(info);
    }
  }

  return (
    <>
      <div className="flex justify-between pt-1 text-white">
        <div className="flex justify-between">
          <button
            className="w-6 h-6 mt-2 ml-2 font-black rounded-full bg-gradient-to-r from-black to-purple-900"
            onClick={(e) => {
              e.preventDefault();
              setCounter((prevState) =>
                prevState - 1 === 0 ? 1 : prevState - 1
              );
            }}
          >
            -
          </button>
          <div className="flex justify-center w-10 mt-1 text-lg">{count}</div>
          <button
            className="w-6 h-6 mt-2 font-black rounded-full bg-gradient-to-r from-black to-purple-900"
            onClick={(e) => {
              e.preventDefault();
              setCounter((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>

        <div>
          <button
            className="p-1 px-2 mt-1 mb-2 mr-2 text-black bg-gray-200 rounded"
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
