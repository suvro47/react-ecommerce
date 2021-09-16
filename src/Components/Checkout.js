import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

export default function Purchese() {
  const { info } = useContext(Context);

  //let cost = 0;
  return (
    <>
      {info.map(
        ({ title, price, count }, index) =>
          (count > 0 ? true : false) && (
            <div className="w-1/2 m-auto mt-2 border-2" key={index}>
              <ul className="inline ">
                <li> Title : {title}</li>
                <li> Price : {price} $</li>
                <li> Quantity: {count} </li>
              </ul>
            </div>
          )
      )}
    </>
  );
}
