import Counter from "./Counter";

function Card({ id, title, price, image, category }) {
  return (
    <>
      <div>
        <div class="bg-white rounded shadow-2xl ml-8 mr-8 mt-8 w-60 h-auto">
          <div class="flex justify-center p-10">
            <img class="w-28 h-28" src={image} alt="" />
          </div>
          <div class="pl-8 pb-4 pr-4 border-1">
            <p> {title}</p>
            <p> Category : {category}</p>
            <p> Price: {price} </p>
          </div>
        </div>

        <div class="shadow-2xl ml-8 mr-8 w-auto px-2 py-1 rounded bg-gradient-to-r from-red-500 to-red-900 text-base p-2">
          <Counter count={0} />
        </div>
      </div>
    </>
  );
}

export default Card;
