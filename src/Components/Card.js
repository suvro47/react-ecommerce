function Card({ id, title, price, image, category }) {
  return (
    <>
      <div class="bg-white rounded shadow-2xl m-8 w-1/5">
        <div class="flex justify-center m-8">
          <img class="w-28 h-28" src={image} alt="" />
        </div>
        <div class="pl-8 pb-4 pr-2 border-1">
          <p> {title}</p>
          <p> Category : {category}</p>
          <p> Price: {price} </p>
        </div>
      </div>
    </>
  );
}

export default Card;
