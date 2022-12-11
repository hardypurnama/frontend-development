import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import DetailLoker from "./container/Loker/DetailLoker";
import Login from "./container/Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProfile from "./container/User/UserProfile";
import Monitoring from "./container/Admin/Monitoring";

import SignUp from "./container/Auth/SignUp";
import Users from "./container/User/Users";
import UserVerify from "./container/User/UserVerify";
import LupaPassword from "./container/Auth/LupaPassword";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/DetailLoker/:id",
    element: <DetailLoker />,
  },
  {
    path: "/Monitoring",
    element: <Monitoring />,
  },
  {
    path: "/Monitoring/:menu",
    element: <Monitoring />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/Users/:menu",
    element: <Users />,
  },
  {
    path: "/UserProfile",
    element: <UserProfile />,
  },
  // {
  //   path: "/UserApply",
  //   element: <UserApply />,
  // },
  // {
  //   path: "/UserNotification",
  //   element: <UserNotification />,
  // },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/LupaPassword",
    element: <LupaPassword />
  },
  {
    path: "/verifikasi/:token",
    element: <UserVerify />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="184618772087-abpjh1jf6p9v041shlu3i6rahv372cc2.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
