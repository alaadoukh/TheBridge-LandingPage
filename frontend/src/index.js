import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import "./index.css";
import Loader from "./components/Loader";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loader />}>
    <Router>
      <App />
    </Router>
  </Suspense>
);

reportWebVitals();
