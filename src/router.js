import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.jsx"));
const Second = lazy(() => import("./pages/Second.jsx"));
const Third = lazy(() => import("./pages/Third.jsx"));
const Forth = lazy(() => import("./pages/Forth.jsx"));
const Fifth = lazy(() => import("./pages/Fifth.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/second",
    element: <Second />,
  },
  {
    path: "/third",
    element: <Third />,
  },
  {
    path: "/forth",
    element: <Forth />,
  },
  {
    path: "/fifth",
    element: <Fifth />,
  },
]);

export default router;
