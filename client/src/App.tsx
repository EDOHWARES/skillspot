import React from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Promotion from "./Pages/Promotion/Promotion";
import Notifications from "./Pages/Notifications/Notifications";
import DownBar from "./components/DownBar/DownBar";
import Menu from "./components/Menu/Menu";
import Logout from "./Pages/Logout/Logout";

const App = () => {
  return (
    <>
      <Menu />
      <div className="max-w-[1440px] mx-auto z-50 h-full">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/orders/*" element={<Orders />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <DownBar />
    </>
  );
};

export default App;
