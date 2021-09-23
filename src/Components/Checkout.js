import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Purchese() {
  const { info } = useContext(Context);

  let cost = 1;

  return (
    <>
      <div
        className='h-full font-sans font-medium bg-contain bg-gradient-to-r from-gray-100 to-gray-200 ' //style={{ backgroundImage: `url(${image})` }}
      >
        <section className='sticky top-0'>
          <Navbar />
        </section>
        {info.map(
          ({ title, price, count }, index) =>
            (count > 0 ? true : false) && (
              <div
                className='w-1/2 m-auto mt-2 border-2 shadow-2xl'
                key={index}
              >
                <ul className='flex justify-between p-2'>
                  <li className='m-auto mt-0 rounded w-52'> Title : {title}</li>
                  <li className='w-32 m-auto mt-0 rounded'>Price : {price}$</li>
                  <li className='w-32 m-auto mt-0 rounded'>
                    Quantity: {count}
                  </li>
                </ul>
              </div>
            )
        )}

        {(cost !== 0.0 ? true : false) && (
          <div className='flex flex-row justify-center w-1/2 p-2 m-auto'>
            <div className='px-2 py-1 mx-8 my-10 text-base text-white bg-red-700 rounded shadow-2xl'>
              Total Cost : {cost.toFixed(2)} $
            </div>
            <button className='px-2 py-1 my-10 text-base text-white bg-green-700 rounded shadow-2xl'>
              <Link to='/purchese_request'> Processed To Request </Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
