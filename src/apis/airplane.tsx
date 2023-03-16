import axios from "axios";
import React from "react";
import { SetterOrUpdater } from "recoil";
import { liveListTpye } from "../type";

const { VITE_APP_AIR_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const liveairplane = (setliveState: SetterOrUpdater<liveListTpye>) => {
  axios
    .get("/FlightStatusList/getFlightStatusList", {
      params: {
        schLineType: "D",
        schIOType: "O",
        serviceKey: VITE_APP_AIR_KEY + "==",
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setliveState(response.data.response.body.items.item);
      console.log(response.data.response.body.items.item);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { liveairplane };
