import { Main } from "../pages";
import Airportparking from "../pages/Airportparking";
import International from "../pages/International";
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
    title: "International Airport",
    url: "/international",
    component: <International />,
  },
];
export default Router;
