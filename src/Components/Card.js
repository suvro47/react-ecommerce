import Counter from "./Counter";

function Card({ props }) {
  const { title, price, image, category } = props;

  return (
    <>
      <div>
        <div className="bg-white rounded shadow-2xl ml-8 mr-8 mt-8 w-60">
          <div className="flex justify-center p-10">
            <img className="w-48 h-48" src={image} alt="" />
          </div>
          <div className="pl-8 pb-4 pr-4 border-1">
            <p> {title}</p>
            <p> {category}</p>
            <p>
              <b> {price} $ </b>
            </p>
          </div>
        </div>

        <div className="shadow-2xl ml-8 mr-8 w-auto px-2 py-1 rounded bg-gradient-to-r from-red-500 to-red-900 text-base p-2">
          <Counter props={props} />
        </div>
      </div>
    </>
  );
}

export default Card;
