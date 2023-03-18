import axios from "axios";
import React from "react";
import { SetterOrUpdater } from "recoil";
import { liveListTpye } from "../type";

const { VITE_APP_AIR_KEY } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const totallive = (setTotal: SetterOrUpdater<number>) => {
  axios
    .get("/FlightStatusList/getFlightStatusList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        schStTime: "1400",
        schEdTime: "1800",
        schLineType: "D",
        schIOType: "O",
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setTotal(response.data.response.body.totalCount);
      console.log(response.data.response.body.totalCount);
    })
    .catch((error) => {
      console.log(error);
    });
};

const liveairplane = (
  setliveState: SetterOrUpdater<liveListTpye>,
  page: number,
  time: string
) => {
  axios
    .get("/FlightStatusList/getFlightStatusList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        schStTime: time,
        schEdTime: "1800",
        schLineType: "D",
        schIOType: "O",
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setliveState(response.data.response.body.items.item);
      console.log(response.data.response.body);
    })
    .catch((error) => {
      console.log(error);
    });
};
export { totallive, liveairplane };
