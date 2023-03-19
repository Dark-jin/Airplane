import React, { useEffect } from "react";
import { liveparking } from "../apis/airplane";

const Airportparking = () => {
  useEffect(() => {
    liveparking();
  }, []);
  return (
    <div>
      <h1>Airportparking</h1>
    </div>
  );
};
export default Airportparking;
