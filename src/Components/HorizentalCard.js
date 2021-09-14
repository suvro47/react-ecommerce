import { useState, useEffect, useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function HorizentalCard({ props }) {
  const { info, dispatch, setTotalCount } = useContext(Context);
  const [_count, set_Counter] = useState(props.count);

  const { id, title, price, image, count } = props;

  function calcuatePrice() {
    let p = _count * price;
    return p.toFixed(2);
  }

  useEffect(() => {
    setTotalCount((prev) => prev - count + _count);
    info[id].count = _count;
    dispatch(info);
  }, [_count, info, count, dispatch, id, setTotalCount]);

  return (
    <>
      <div className="flex flex-row flex-wrap mb-2 border-2">
        <div className="flex flex-col justify-center p-2 m-4">
          <img className="w-28 h-28" src={image} alt="" />
        </div>

        <div className="flex flex-col justify-center w-1/5 mx-4">
          <p> {title}</p>
        </div>

        <div className="flex flex-col justify-center mx-2">
          <p> {price} $ </p>
        </div>

        <div className="flex flex-col justify-center mx-2 ">x</div>
        <div className="flex flex-row items-center mx-2 ">
          <button
            className="w-10 h-10 border-2"
            onClick={(e) => {
              e.preventDefault();
              set_Counter((prevState) =>
                prevState - 1 === 0 ? 1 : prevState - 1
              );
            }}
          >
            -
          </button>
          <div className="flex flex-row justify-center w-8 h-10 pt-2 border-2 border-l-0 border-r-0">
            {_count}
          </div>
          <button
            className="w-10 h-10 border-2"
            onClick={(e) => {
              e.preventDefault();
              set_Counter((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>

        <div className="flex flex-col justify-center mx-2">
          <p>Cost : {calcuatePrice()} $ </p>
        </div>
      </div>
    </>
  );
}

export default HorizentalCard;
