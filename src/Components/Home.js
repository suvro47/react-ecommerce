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
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="font-serif h-auto bg-contain bg-gradient-to-r from-gray-300 to-gray-500" //style={{ backgroundImage: `url(${image})` }}
    >
      <section className="sticky top-0">
        <Navbar />
      </section>
      <section className="flex flex-wrap justify-around flex-grow pb-10">
        {products.map((p, index) => (
          <Card key={index} props={p} />
        ))}
      </section>
    </div>
  );
}

export default Home;
