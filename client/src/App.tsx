import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Orders from "./Pages/Orders/Orders";
import Promotion from "./Pages/Promotion/Promotion";
import Notifications from "./Pages/Notifications/Notifications";
import DownBar from "./components/DownBar/DownBar";
import Menu from "./components/Menu/Menu";
import Welcome from "./Pages/Welcome/Welcome";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();
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

  // Determine if the DownBar should be displayed
  const shouldShowBar =
    location.pathname === "/" || // Show DownBar on the exact home route
    !location.pathname.startsWith("/") || // Exclude sub-routes of `/`
    location.pathname === "/orders" ||
    location.pathname === "/promotion" ||
    location.pathname === "/notifications";

  return (
    <section>
      <ToastContainer />

      {showOnBoarding ? (
        <Welcome handleBoarded={handleBoarded} />
      ) : (
        <section>
          <Menu />
          {shouldShowBar && <Header />}
          <div className="max-w-[1440px] mx-auto z-50 h-full">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/orders/*" element={<Orders />} />
              <Route path="/promotion" element={<Promotion />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
          {shouldShowBar && <DownBar />}
        </section>
      )}
    </section>
  );
};

export default App;
