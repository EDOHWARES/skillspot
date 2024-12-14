import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Assuming global styles are in index.css
import App from "./App.tsx"; // Your main App component
import { BrowserRouter as Router } from "react-router-dom"; // React Router for routing
import { AppContextProvider } from "./Context/StoreContext.tsx";

// Rendering the app and wrapping it with context provider and router
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </StrictMode>
);
