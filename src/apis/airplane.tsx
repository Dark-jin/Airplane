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
        serviceKey:
          "JmupyLFc3jeyKQbiRTPX64a3wwJ85VpAkTQqUBemPr4OrupP%2BTlBZTjb1GPzGbEEQmbYCzKLw0XlHZ0m4K1fFQ%3D%3D",
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
