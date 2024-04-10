import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ProductList from "./home";
import ItemDetails from "./details";

import { ProductProvider } from "./ProductContext";
import Login from "./login";
import Category from "./category";
function App() {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProductList />} />
            <Route path="/details" element={<ItemDetails />} />
            <Route path="/Jwellery" element={<Category/>} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
