import { useState, useContext, useEffect } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function AddToCart({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const [_count, set_Counter] = useState(0);

  const { id } = props;

  function addToCart(e, props) {
    e.preventDefault();
    const updatedProps = { ...props, count: 1 };
    info[id] = updatedProps;
    setInfo(info);
    setTotalCount((prev) => prev + 1);
    set_Counter(info[id].count);
  }

  // useEffect(() => {
  //   if (info.hasOwnProperty("count")) {
  //     //console.log(" checked............");
  //     set_Counter(info[id].count);
  //   }

  //   console.log(" checked............");
  // }, [info, id]);

  useEffect(() => {
    console.log("i am in useeffect");
    return () => {
      console.log("Component unmunted.....");
    };
  }, [info]);

  return (
    <>
      <div className="text-white">
        {(_count > 0 ? true : false) && (
          <div className="flex justify-between m-auto w-28">
            <button
              className="w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900"
              onClick={(e) => {
                e.preventDefault();
                set_Counter((prevState) =>
                  prevState - 1 <= 0 ? 0 : prevState - 1
                );
                info[id].count = info[id].count - 1;
                setTotalCount((prev) => prev - 1);
                setInfo(info);

                console.log("_count from Counter ");
                console.log(_count);
              }}
            >
              -
            </button>
            <div className="flex justify-center w-10 mt-1 text-lg">
              {_count}
            </div>
            <button
              className="w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900"
              onClick={(e) => {
                e.preventDefault();
                set_Counter((prev) => prev + 1);
                setTotalCount((prev) => prev + 1);
                info[id].count = info[id].count + 1;
                setInfo(info);
                console.log("_count from Counter ");
                console.log(_count);
              }}
            >
              +
            </button>
          </div>
        )}

        {(_count === 0 ? true : false) && (
          <div className="m-auto w-28">
            <button
              className="px-2 my-2 text-black bg-gray-200 rounded"
              onClick={(e) => addToCart(e, props)}
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default AddToCart;
