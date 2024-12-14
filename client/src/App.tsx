import React from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Promotion from "./Pages/Promotion/Promotion";
import Notifications from "./Pages/Notifications/Notifications";
import Header from "./components/Header/Header";
import DownBar from "./components/DownBar/DownBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 mt-[15rem] z-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <DownBar />
    </>
  );
};

export default App;
