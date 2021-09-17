import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Counter from "./Counter";

function AddToCart({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const { id } = props;

  function addToCart() {
    const updatedProps = { ...props, count: 1 };
    const temp = [...info];
    temp.push(updatedProps);
    setInfo(temp);
    setTotalCount((prev) => prev + 1);
  }

  return (
    <>
      {!info.find((item) => item.id === id) ? (
        <div className="m-auto w-28">
          <button
            className="px-2 my-2 text-black bg-gray-200 rounded"
            onClick={(e) => {
              e.preventDefault();
              return addToCart();
            }}
          >
            Add To Cart
          </button>
        </div>
      ) : (
        //<div> Hello </div>
        <Counter id={props.id} />
      )}
    </>
  );
}

export default AddToCart;
