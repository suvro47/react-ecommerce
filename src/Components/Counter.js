import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Counter({ id }) {
  const { info, setInfo, setTotalCount } = useContext(Context);

  const currentItem = info.find((item) => item.id === id);

  return (
    <>
      <div className="text-white">
        <div className="flex justify-between m-auto w-28">
          <button
            className="w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900"
            onClick={(e) => {
              e.preventDefault();
              if (currentItem.count > 1) {
                const temp = [...info];
                temp.find((item) => item.id === id).count--;
                setTotalCount((prev) => prev - 1);
                setInfo(temp);
              } else {
                const temp = [...info];
                const index = temp.findIndex((item) => item.id === id);
                temp.splice(index, 1);
                setInfo(temp);
              }
            }}
          >
            -
          </button>
          <div className="flex justify-center w-10 mt-1 text-lg">
            {currentItem.count}
          </div>
          <button
            className="w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900"
            onClick={(e) => {
              e.preventDefault();
              setTotalCount((prev) => prev + 1);
              const temp = [...info];
              temp.find((item) => item.id === id).count++;
              setInfo(temp);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
