import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Card from "./Card";

//import image from "../assets/image.jpg";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      class="font-serif h-auto bg-contain bg-gradient-to-r from-green-100 to-gray-500" //style={{ backgroundImage: `url(${image})` }}
    >
      <section class="sticky top-0">
        <Navbar />
      </section>
      <section
        class="flex flex-wrap justify-around flex-grow flex-shrink-0 
      pb-10"
      >
        {products.map((p, index) => (
          <Card key={index} {...p} />
        ))}
      </section>
    </div>
  );
}

export default Home;
