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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/Dashboard", element: <DashBoard /> },
      { path: "/Courses", element: <Courses /> },
      { path: "/About", element: <About /> },
      { path: "/Pricing", element: <Pricing /> },
      { path: "/Signin", element: <SignIn /> },
      { path: "/SignUp", element: <SignUp /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
reportWebVitals();
