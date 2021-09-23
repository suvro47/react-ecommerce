import { useContext } from "react";
import { Context } from "../GlobalContexts/ContextHandler";

function Product({ props }) {
  const { id, title, price, image } = props;
  const { info, setInfo, setTotalCount } = useContext(Context);
  const currentItem = info.find((item) => item.id === id);

  function addToCart() {
    const updatedProps = { ...props, count: 1 };
    const temp = [...info];
    temp.push(updatedProps);
    setInfo(temp);
    setTotalCount((prev) => prev + 1);
  }

  return (
    <>
      <div className='flex flex-col items-stretch justify-between w-64 mt-8 ml-8 mr-8 bg-white rounded shadow-2xl'>
        <div className='flex justify-center p-8'>
          <img className='w-full h-52' src={image} alt='' />
        </div>
        <div className='pb-2 pl-8 pr-4'>
          <p> {title}</p>
          {/* <p> {category}</p> */}
          <p>
            Price : <span className='text-black-600'> {price} </span> $
          </p>
        </div>
        <div className='px-2 py-1 text-base rounded-b shadow-2xl bg-gradient-to-r from-gray-500 to-gray-700'>
          <>
            {!info.find((item) => item.id === id) ? (
              <div className='m-auto w-28'>
                <button
                  className='px-2 my-2 text-black bg-gray-200 rounded'
                  onClick={(e) => {
                    e.preventDefault();
                    return addToCart();
                  }}
                >
                  Add To Cart
                </button>
              </div>
            ) : (
              <>
                <div className='text-white'>
                  <div className='flex justify-between m-auto w-28'>
                    <button
                      className='w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900'
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentItem.count > 0) {
                          const temp = [...info];
                          temp.find((item) => item.id === id).count--;
                          if (temp.find((item) => item.id === id).count === 0) {
                            const index = temp.findIndex(
                              (item) => item.id === id
                            );
                            temp.splice(index, 1);
                          }
                          setTotalCount((prev) => prev - 1);
                          setInfo(temp);
                        }
                      }}
                    >
                      -
                    </button>
                    <div className='flex justify-center w-10 mt-1 text-lg'>
                      {currentItem.count}
                    </div>
                    <button
                      className='w-6 h-6 my-2 font-black rounded-full bg-gradient-to-r from-red-500 to-red-900'
                      onClick={(e) => {
                        e.preventDefault();
                        setTotalCount((prev) => prev + 1);
                        const temp = [...info];
                        temp.find((item) => item.id === id).count++;
                        setInfo(temp);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default Product;
