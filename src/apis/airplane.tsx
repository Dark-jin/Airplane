import axios from "axios";
import React from "react";
import { SetterOrUpdater } from "recoil";
import { liveListTpye, parkingType } from "../type";

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
      //console.log(response.data.response.body.totalCount);
    })
    .catch((error) => {
      console.log(error);
    });
};

const liveairplane = (
  setliveState: SetterOrUpdater<liveListTpye>,
  time: string,
  line: string
) => {
  axios
    .get("/FlightStatusList/getFlightStatusList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        schStTime: time,
        schEdTime: "2400",
        schLineType: line,
        schIOType: "O",
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setliveState(response.data.response.body.items.item);
      //console.log(response.data.response.body);
    })
    .catch((error) => {
      console.log(error);
    });
};
const liveparking = (setParking: SetterOrUpdater<parkingType>) => {
  axios
    .get("AirportParking/airportparkingRT", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
      },
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response.data.response.body.items.item);
      setParking(response.data.response.body.items.item);
    });
};
export { totallive, liveairplane, liveparking };
