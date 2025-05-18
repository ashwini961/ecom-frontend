import React from "react";
import Products from "./components/Products";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import Register from "./components/Register"
import Login from "./components/Login";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
                <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />}  />
            </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
