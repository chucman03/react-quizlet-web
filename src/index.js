import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User/User";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/Home/HomePage";
import ManageUser from "./Components/Admin/content/ManageUser";
import DashBoard from "./Components/Admin/content/DashBoard";
import Login from "./Components/Auth/Login";
import Layout from "./Layout";
import { PersistGate } from "redux-persist/integration/react";
import "nprogress/nprogress.css";
import "react-awesome-lightbox/build/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
