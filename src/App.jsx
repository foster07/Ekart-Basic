import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>} />

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
