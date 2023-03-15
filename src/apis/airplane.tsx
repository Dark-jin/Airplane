import axios from "axios";
import React from "react";

const { VITE_APP_AIR_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const liveairplane = () => {
  axios
    .get("/FlightStatusList/getFlightStatusList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY,
        schLineType: "D",
        schIOType: "O",
      },
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { liveairplane };
