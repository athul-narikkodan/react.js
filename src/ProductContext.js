import React, { createContext, useState, useContext } from "react";
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const updateSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <ProductContext.Provider value={{ selectedProduct, updateSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => useContext(ProductContext);
