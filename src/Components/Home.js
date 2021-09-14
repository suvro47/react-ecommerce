import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";
import Cart from "./Cart";
import Loader from "react-loader-spinner";

//import image from "../assets/image.jpg";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(true);
  }, []);

  return (
    <div
      className="h-auto font-sans font-medium bg-contain " //style={{ backgroundImage: `url(${image})` }}
    >
      <section className="sticky top-0">
        <Navbar />
      </section>

      {isLoading ? (
        <div>
          <section className="flex flex-wrap justify-around pb-10">
            {products.map((p, index) => (
              <Card key={index} props={p} />
            ))}
          </section>
          <section>
            <Cart />
          </section>
        </div>
      ) : (
        <div className="w-20 m-auto my-40">
          <Loader
            type="Bars"
            color="#00BFFF"
            height={80}
            width={100}
            timeout={10000}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
