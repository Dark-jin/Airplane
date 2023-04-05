import axios from "axios";
import React from "react";
import { SetterOrUpdater } from "recoil";
import {
  domesticScheduleType,
  internationalType,
  liveListTpye,
  onedomesticScheduleType,
  parkingType,
  parkingcongestionType,
  totalcountType,
} from "../type";

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
      setParking(response.data.response.body.items.item);
    });
};
const liveparkingcongestion = (
  airport: string,
  setParkingcongestion: SetterOrUpdater<parkingcongestionType>
) => {
  axios
    .get("/AirportParkingCongestion/airportParkingCongestionRT", {
      params: {
        schAirportCode: airport,
        serviceKey: VITE_APP_AIR_KEY + "==",
        numOfRows: 10,
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      //console.log(response.data.response.body.items.item);
      setParkingcongestion(response.data.response.body.items.item);
    })
    .catch((error) => {
      console.log(error);
    });
};

const domesticsearch = (
  date: number,
  setDomestic: SetterOrUpdater<domesticScheduleType>,
  startcity: string,
  endcity: string,
  totalCount: SetterOrUpdater<totalcountType>,
  pagenumber: number,
  setOnedomestic: SetterOrUpdater<onedomesticScheduleType>
) => {
  axios
    .get("/FlightScheduleList/getDflightScheduleList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        numOfRows: 7,
        pageNo: pagenumber,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setDomestic(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
      console.log(response.data.response.body.totalCount);
      if (response.data.response.body.totalCount == 1) {
        setOnedomestic(response.data.response.body.items.item);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const pagedomesticsearch = (
  date: number,
  setDomestic: SetterOrUpdater<domesticScheduleType>,
  startcity: string,
  endcity: string,
  totalCount: SetterOrUpdater<totalcountType>,
  pagenumber: number,
  setOnedomestic: SetterOrUpdater<onedomesticScheduleType>,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .get("/FlightScheduleList/getDflightScheduleList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        numOfRows: 7,
        pageNo: pagenumber,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setDomestic(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
      if (response.data.response.body.totalCount == 1) {
        setOnedomestic(response.data.response.body.items.item);
      }
      setLoading && setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
const internationalairport = (
  setIternational: SetterOrUpdater<internationalType>,
  pagenumber: number,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  axios
    .get("/AirportCodeList/getAirportCodeList", {
      params: {
        serviceKey: VITE_APP_AIR_KEY + "==",
        pageNo: pagenumber,
        numOfRows: 30,
      },
      headers: headerConfig,
    })
    .then((response) => {
      //console.log(response.data.response.body.items.item);
      setIternational(response.data.response.body.items.item);
      setLoading && setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  totallive,
  liveairplane,
  liveparking,
  liveparkingcongestion,
  domesticsearch,
  pagedomesticsearch,
  internationalairport,
};
