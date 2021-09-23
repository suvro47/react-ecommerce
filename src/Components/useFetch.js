import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(uri) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
          localStorage.setItem("products", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(true);
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
      setIsLoading(false);
    }
  }, [uri]);

  return { products, isLoading };
}
