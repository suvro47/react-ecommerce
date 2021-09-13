import { useState } from "react";
//import { Context } from "../GlobalContexts/ContextHandler";

function HorizentalCard({ props }) {
  const { title, price, image } = props;
  //const { totalCount, setTotalCount } = useContext(Context);
  const [_count, set_Counter] = useState(props.count);

  return (
    <>
      <div className="border-2 flex flex-row flex-wrap mb-2">
        <div className="m-4 p-2 flex flex-col justify-center">
          <img className="w-28 h-28" src={image} alt="" />
        </div>

        <div className="flex flex-col justify-center w-2/6">
          <p> {title}</p>
        </div>

        <div className="flex flex-col justify-center mx-2">
          <p> {price} $ </p>
        </div>

        <div className="flex flex-col justify-center mx-2 ">x</div>
        <div className="flex flex-row items-center mx-2 ">
          <button
            className="border-2 w-10 h-10"
            onClick={(e) => {
              e.preventDefault();
              set_Counter((prev) => prev - 1);
            }}
          >
            -
          </button>
          <div className="flex flex-row justify-center pt-2 border-2 border-l-0 border-r-0 w-8 h-10">
            {_count}
          </div>
          <button
            className="border-2 w-10 h-10"
            onClick={(e) => {
              e.preventDefault();
              set_Counter((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>

        <div className="flex flex-col justify-center mx-2 w-1/6">
          <p>Total Price : { _count  *  price } $ </p>
        </div>
      </div>
    </>
  );
}

export default HorizentalCard;
