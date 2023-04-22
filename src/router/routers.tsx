import { Main } from "../pages";
import Airportparking from "../pages/Airportparking";
import AirportInfo from "../pages/AirportInfo";
import Search from "../pages/Search";
import BusInfo from "../pages/Businfo";
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
  {
    title: "BusInfo",
    url: "/businfo",
    component: <BusInfo />,
  },
];
export default Router;
