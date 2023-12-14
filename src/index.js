import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // root(퍼블릭의 인덱스.html)에 App을 랜더링시켜준다
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
