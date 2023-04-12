import { Main } from "../pages";
import Airportparking from "../pages/Airportparking";
import AirportInfo from "../pages/AirportInfo";
import Search from "../pages/Search";
const Router = [
  {
    title: "Home",
    url: "/",
    component: <Main />,
  },
  {
    title: "Airport parking",
    url: "/airport-parking",
    component: <Airportparking />,
  },
  {
    title: "Search",
    url: "/search",
    component: <Search />,
  },
  {
    title: "AirportInfo",
    url: "/airportInfo",
    component: <AirportInfo />,
  },
];
export default Router;
