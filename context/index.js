//   3 main steps
//   i. create the context
//  ii. provide the context
// iii. consume that context

import { createContext, useState } from "react";

const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  return <Context.Provider value={{ products }}>{children}</Context.Provider>;
};

export default ProductContext;
