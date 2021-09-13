function HorizentalCard({ props }) {
  const { title, price, image, category } = props;

  return (
    <div className="border-2 flex flex-row m-4">
      <div className="m-4 p-2 flex flex-col justify-center">
        <img className="w-28 h-28" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <p> {title}</p>
        <p> {category}</p>
        <p> {price} $</p>
      </div>
    </div>
  );
}

export default HorizentalCard;
