import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Buycredit from "./pages/Buycredit";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useContext } from "react";
import { Acontext } from "./context/Acontext";
const App = () => {
  const {showLogin} = useContext(Acontext);
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navigation/>
      {showLogin &&<Login/> }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<Buycredit />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
