import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Item({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const { id, title, price, image } = props;

  const currentItem = info.find((item) => item.id === id);

  function calcuatePrice() {
    let p = currentItem.count * price;
    return p.toFixed(2);
  }

  return (
    <>
      {currentItem.count > 0 && (
        <div className="flex flex-row flex-wrap p-2 mb-2 font-sans font-medium border rounded shadow-2xl">
          <div className="float-left">
            <button
              className="px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                // setTotalCount((prev) => prev - info[id].count);
                // info[id] = undefined;
                // setInfo(info);
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center p-2 mx-4">
            <img className="w-28 h-28" src={image} alt="" />
          </div>

          <div className="flex flex-col justify-center w-32 p-2 mx-4">
            <p> {title}</p>
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <p> {price}$ </p>
          </div>

          <div className="flex flex-col justify-center p-2 mx-4">
            <div className="flex flex-row justify-center w-8">
              <button
                className="px-2 py-1 border rounded"
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
                    setTotalCount((prev) => prev - 1);
                    setInfo(temp);
                  }
                }}
              >
                -
              </button>
              <div className="px-2 py-1 text-center border">
                {currentItem.count}
              </div>
              <button
                className="px-2 py-1 border rounded"
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

          <div className="flex flex-col justify-center p-2 mx-4">
            <p> Cost : {calcuatePrice()}$ </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Item;
