import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // this method below send all data and information to our components and we receive that and use it.
  <Provider store={store}>
    <App />
  </Provider>
);
