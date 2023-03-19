import { Main } from "../pages";
import Airportparking from "../pages/Airportparking";
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
];
export default Router;
