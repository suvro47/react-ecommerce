import Counter from "./Counter";

function Card({ props }) {
  const { title, price, image, category } = props;

  return (
    <>
      <div className="flex flex-col justify-between items-stretch bg-white rounded shadow-2xl ml-8 mr-8 mt-8 w-64">
        <div className="flex justify-center p-8">
          <img className="w-full h-48" src={image} alt="" />
        </div>
        <div className="pb-2 pl-8 pr-4">
          <p> {title}</p>
          <p> {category}</p>
          <p> {price} $</p>
        </div>
        <div className="shadow-2xl px-2 py-1 rounded-b bg-gradient-to-r from-red-500 to-red-900 text-base">
          <Counter props={props} />
        </div>
      </div>
    </>
  );
}

export default Card;
