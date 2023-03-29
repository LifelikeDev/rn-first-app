import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // api call
  useEffect(() => {
    setLoading(true);

    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if (data) {
        setLoading(false);
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Context.Provider value={{ products, loading }}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
