import Counter from "./Counter";

function Card({ props }) {
  const { title, price, image } = props;

  return (
    <>
      <div className="flex flex-col items-stretch justify-between w-64 mt-8 ml-8 mr-8 bg-white rounded shadow-2xl">
        <div className="flex justify-center p-8">
          <img className="w-full h-52" src={image} alt="" />
        </div>
        <div className="pb-2 pl-8 pr-4">
          <p> {title}</p>
          {/* <p> {category}</p> */}
          <p>
            Price : <span className="text-black-600"> {price} </span> $
          </p>
        </div>
        <div className="px-2 py-1 text-base rounded-b shadow-2xl bg-gradient-to-r from-gray-500 to-gray-700">
          <Counter props={props} />
        </div>
      </div>
    </>
  );
}

export default Card;
