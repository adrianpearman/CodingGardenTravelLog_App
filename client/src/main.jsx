import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.jsx";
import "./styles/index.scss";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
