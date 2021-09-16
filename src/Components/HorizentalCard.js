import { useState, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function HorizentalCard({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const [_count, set_Counter] = useState(props.count);

  const { id, title, price, image } = props;

  function calcuatePrice() {
    let p = _count * price;
    return p.toFixed(2);
  }

  return (
    <>
      {(_count > 0 ? true : false) && (
        <div className="flex flex-row flex-wrap mb-2 font-sans font-medium border-2">
          <div className="float-left">
            <button
              className="px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                setTotalCount((prev) => prev - _count);
                set_Counter(0);
                info[id].count = 0;
                setInfo(info);
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center p-2 m-4">
            <img className="w-28 h-28" src={image} alt="" />
          </div>

          <div className="flex flex-col justify-center w-40 mx-4">
            <p> {title}</p>
          </div>

          <div className="flex flex-col justify-center">
            <p> {price} $ </p>
          </div>

          <div className="flex flex-row justify-center w-auto mx-2">
            <div className="flex flex-col justify-center w-8">
              <button
                className="px-2 py-1 border rounded"
                onClick={(e) => {
                  e.preventDefault();
                  set_Counter((prevState) =>
                    prevState - 1 <= 0 ? 0 : prevState - 1
                  );
                  info[id].count = info[id].count - 1;
                  setTotalCount((prev) => prev - 1);
                  setInfo(info);
                }}
              >
                -
              </button>
              <div className="px-2 py-1 text-center border">
                {info[id].count}
              </div>
              <button
                className="px-2 py-1 border rounded"
                onClick={(e) => {
                  e.preventDefault();
                  set_Counter((prev) => prev + 1);
                  setTotalCount((prev) => prev + 1);
                  info[id].count = info[id].count + 1;
                  setInfo(info);
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center ml-4">
            <p> Cost : {calcuatePrice()} $ </p>
          </div>
        </div>
      )}
    </>
  );
}

export default HorizentalCard;
