import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LocalDataProvider } from "./context/localstrorage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalDataProvider>
      <App />
    </LocalDataProvider>
  </React.StrictMode>
);
