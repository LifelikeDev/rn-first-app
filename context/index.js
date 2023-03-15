//   3 main steps
//   i. create the context
//  ii. provide the context
// iii. consume that context

import { createContext, useEffect, useState } from "react";

const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  // api call
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data) setProducts(data.products);
    };

    fetchProducts();
  }, []);

  console.log({ products });

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};

export default ProductContext;
