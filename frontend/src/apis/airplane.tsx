import axios from "axios";
import React from "react";
import { SetterOrUpdater } from "recoil";
import {
  domesticScheduleType,
  airportinfoType,
  liveListTpye,
  onedomesticScheduleType,
  parkingType,
  parkingcongestionType,
  totalcountType,
  internationalScheduleType,
  oneinternationalScheduleType,
  airportbusinfoType,
} from "../type";

const { VITE_APP_AIR_KEY, VITE_APP_SERVER_URL } = import.meta.env;

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const jaxios = axios.create({
  baseURL: VITE_APP_SERVER_URL,
});

const liveairplane = (
  setliveState: SetterOrUpdater<liveListTpye>,
  time: string,
  line: string,
  totalCount: SetterOrUpdater<totalcountType>,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  jaxios
    .get(`/FlightStatusList/${time}/${line}`, {})
    .then((response) => {
      if (response.data.response.body.items.item.length === 1) {
        setliveState([response.data.response.body.items.item]);
      }
      setliveState(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading && setLoading(false);
    });
};
const liveparking = (setParking: SetterOrUpdater<parkingType>) => {
  jaxios.get(`/AirportParking/airportparkingRT`, {}).then((response) => {
    setParking(response.data.response.body.items.item);
  });
};
const liveparkingcongestion = (
  airport: string,
  setParkingcongestion: SetterOrUpdater<parkingcongestionType>
) => {
  jaxios
    .get(`/AirportParkingCongestion/airportParkingCongestionRT/${airport}`, {})
    .then((response) => {
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
  jaxios
    .get("/FlightScheduleList/getDflightScheduleList", {
      params: {
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        pageNo: pagenumber,
      },
    })
    .then((response) => {
      setDomestic(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
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
  jaxios
    .get("/FlightScheduleList/getDflightScheduleListv1", {
      params: {
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        pageNo: pagenumber,
      },
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
const airportinfoAPI = (
  setAirportinfo: SetterOrUpdater<airportinfoType>,
  pagenumber: number,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  jaxios
    .get(`/AirportCodeList/getAirportCodeList/${pagenumber}`, {})
    .then((response) => {
      setAirportinfo(response.data.response.body.items.item);
      setLoading && setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
const internationalsearch = (
  date: number,
  setInternational: SetterOrUpdater<internationalScheduleType>,
  startcity: string,
  endcity: string,
  totalCount: SetterOrUpdater<totalcountType>,
  pagenumber: number,
  setOneinternational: SetterOrUpdater<oneinternationalScheduleType>
) => {
  jaxios
    .get("/FlightScheduleList/getIflightScheduleList", {
      params: {
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        pageNo: pagenumber,
      },
    })
    .then((response) => {
      setInternational(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
      if (response.data.response.body.totalCount == 1) {
        setOneinternational(response.data.response.body.items.item);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const pageinternationalsearch = (
  date: number,
  setInternational: SetterOrUpdater<internationalScheduleType>,
  startcity: string,
  endcity: string,
  totalCount: SetterOrUpdater<totalcountType>,
  pagenumber: number,
  setOneinternational: SetterOrUpdater<oneinternationalScheduleType>,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  jaxios
    .get("/FlightScheduleList/getIflightScheduleList", {
      params: {
        schDate: date,
        schDeptCityCode: startcity,
        schArrvCityCode: endcity,
        pageNo: pagenumber,
      },
      headers: headerConfig,
    })
    .then((response) => {
      setInternational(response.data.response.body.items.item);
      totalCount(response.data.response.body.totalCount);
      if (response.data.response.body.totalCount == 1) {
        setOneinternational(response.data.response.body.items.item);
      }
      setLoading && setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
};
const BusinfoAPI = (
  bus: string,
  setBus: SetterOrUpdater<airportbusinfoType>,
  pagenumber: number,
  totalCount: SetterOrUpdater<number>,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  jaxios
    .get(
      `/AirportBusInfo/businfo/${pagenumber}/${bus === "" ? "all" : bus}`,
      {}
    )
    .then((response) => {
      setLoading && setLoading(false);
      totalCount(response.data.response.body.totalCount);
      setBus(response.data.response.body.items.item);
    })
    .catch((error) => {
      console.log(error);
    });
};
const BusinfopageAPI = (
  bus: string,
  setBus: SetterOrUpdater<airportbusinfoType>,
  pagenumber: number,
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  jaxios
    .get(
      `/AirportBusInfo/businfo/${pagenumber}/${bus === "" ? "all" : bus}`,
      {}
    )
    .then((response) => {
      setLoading && setLoading(false);
      setBus(response.data.response.body.items.item);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  liveairplane,
  liveparking,
  liveparkingcongestion,
  domesticsearch,
  pagedomesticsearch,
  airportinfoAPI,
  internationalsearch,
  pageinternationalsearch,
  BusinfoAPI,
  BusinfopageAPI,
};
