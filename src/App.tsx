import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./pages";
import Airportparking from "./pages/Airportparking";
import Search from "./pages/Search";
import International from "./pages/International";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/airport-parking",
    element: <Airportparking />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/international",
    element: <International />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
