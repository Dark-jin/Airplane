import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./pages";
import Airportparking from "./pages/Airportparking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/airport-parking",
    element: <Airportparking />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
