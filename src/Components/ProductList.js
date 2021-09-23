import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import CartList from "./CartList";
import Loader from "react-loader-spinner";
import useFetch from "./useFetch";

//import image from "../assets/image.jpg";

function ProductList() {
  const { products, isLoading } = useFetch("https://fakestoreapi.com/products");

  return (
    <div className='h-auto font-sans font-medium bg-contain bg-gradient-to-r from-gray-100 to-gray-200'>
      <section className='sticky top-0'>
        <Navbar />
      </section>

      {!isLoading ? (
        <div>
          <section className='flex flex-wrap justify-around pb-10'>
            {products.map((p, index) => (
              <Product key={index} props={p} />
            ))}
          </section>
          <section>
            <CartList />
          </section>
        </div>
      ) : (
        <div className='w-20 h-screen m-auto my-40'>
          <Loader type='Bars' color='#00BFFF' height={80} width={100} />
        </div>
      )}
    </div>
  );
}

export default ProductList;
