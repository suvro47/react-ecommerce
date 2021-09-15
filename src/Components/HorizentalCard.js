import { useState, useEffect, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function HorizentalCard({ props }) {
  const { info, setInfo, setTotalCount } = useContext(Context);
  const [_count, set_Counter] = useState(props.count);

  const { id, title, price, image, count } = props;

  function calcuatePrice() {
    let p = _count * price;
    return p.toFixed(2);
  }

  useEffect(() => {
    setTotalCount((prev) => prev - count + _count);
    info[id].count = _count;
    setInfo(info);
  }, [_count, info, count, setInfo, id, setTotalCount]);

  return (
    <>
      <div className="flex flex-row flex-wrap mb-2 font-sans font-medium border-2">
        <div className="flex flex-col justify-center p-2 m-4">
          <img className="w-28 h-28" src={image} alt="" />
        </div>

        <div className="flex flex-col justify-center w-40 mx-4">
          <p> {title}</p>
        </div>

        <div className="flex flex-col justify-center mx-4">
          <p> {price} $ </p>
        </div>

        <div className="flex flex-row justify-center w-auto mx-2">
          <div className="flex flex-col justify-center w-8">
            <button
              className="px-2 py-1 border rounded"
              onClick={(e) => {
                e.preventDefault();
                set_Counter((prevState) =>
                  prevState - 1 === 0 ? 1 : prevState - 1
                );
              }}
            >
              -
            </button>
            <div className="px-2 py-1 text-center border">{_count}</div>
            <button
              className="px-2 py-1 border rounded"
              onClick={(e) => {
                e.preventDefault();
                set_Counter((prev) => prev + 1);
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
    </>
  );
}

export default HorizentalCard;
