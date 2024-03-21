import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import DashBoard from "./Components/DashBoard";
import Courses from "./Components/Courses";
import Layout from "./Layout";
import Main from "./Components/Main";
import Pricing from "./Components/Pricing";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Fun from "./Components/Fun";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/courses", element: <Courses /> },
      { path: "/about", element: <About /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/fun", element: <Fun /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
reportWebVitals();
