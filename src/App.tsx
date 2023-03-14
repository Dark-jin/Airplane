import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
