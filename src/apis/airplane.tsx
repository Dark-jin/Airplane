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
        schLineType: "D",
        schIOType: "O",
        serviceKey: VITE_APP_AIR_KEY + "==",
      },
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response.data.response.body.items.item);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { liveairplane };
