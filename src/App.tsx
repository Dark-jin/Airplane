import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./pages";
import Airportparking from "./pages/Airportparking";
import Search from "./pages/Search";
import AirportInfo from "./pages/AirportInfo";

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
    path: "/airportInfo",
    element: <AirportInfo />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
