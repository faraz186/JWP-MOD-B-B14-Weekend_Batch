import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AppStore } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={AppStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
