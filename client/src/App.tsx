import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Promotion from "./Pages/Promotion/Promotion";
import Notifications from "./Pages/Notifications/Notifications";
import DownBar from "./components/DownBar/DownBar";
import Menu from "./components/Menu/Menu";
import Logout from "./Pages/Logout/Logout";
import Welcome from "./Pages/Welcome/Welcome";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showOnBoarding, setShowOnBoarding] = useState(true);

  // Check if user has already been onBoarded using localStorage
  useEffect(() => {
    const hasBeenOnBoarded = localStorage.getItem("hasBeenOnBoarded");
    if (hasBeenOnBoarded) {
      setShowOnBoarding(false); // Skip the onBoarding if the flag is set
    }
  }, []);

  // Handle onBoarded
  const handleBoarded = () => {
    setShowOnBoarding(false); // Hide the greeting
    localStorage.setItem("hasBeenOnBoarded", "true"); // Set the flag in localStorage
  };

  return (
    <section>
      <ToastContainer />

      {showOnBoarding ? (
        <Welcome handleBoarded={handleBoarded} />
      ) : (
        <section>
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
        </section>
      )}
    </section>
  );
};

export default App;
