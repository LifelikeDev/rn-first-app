import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // add to favourites
  const addToFavourites = (productId, reason) => {
    let favouriteItemsCopy = [...favouriteItems];
    const foundIndex = favouriteItemsCopy.findIndex(
      (item) => item.id === productId
    );

    if (foundIndex === -1) {
      const currentProductItem = products.find((item) => item.id === productId);
      favouriteItemsCopy.push({
        id: productId,
        title: currentProductItem.title,
        reason,
      });
    } else {
      favouriteItemsCopy[foundIndex] = {
        ...favouriteItemsCopy[foundIndex],
        reason,
      };
    }

    setFavouriteItems(favouriteItemsCopy);
  };

  // remove from favourites
  const handleRemove = (productId) => {
    let favouriteItemsCopy = [...favouriteItems];
    const filtered = favouriteItemsCopy.filter((item) => item.id !== productId);

    setFavouriteItems(filtered);
  };

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
    <Context.Provider
      value={{
        products,
        loading,
        favouriteItems,
        addToFavourites,
        handleRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
