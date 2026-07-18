import React from "react";
import ReactDOM from "react-dom/client";
import MyCareApp from "./MyCareApp.jsx";
import AuthGate from "./AuthGate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthGate>
      <MyCareApp />
    </AuthGate>
  </React.StrictMode>
);
