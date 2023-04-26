const { default: axios } = require("axios");

const route = require("express").Router();

const headerConfig = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const baseurl = "http://openapi.airport.co.kr/service/rest";
const servicekey = process.env.VITE_APP_AIR_KEY + "==";

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.get("/FlightStatusList/:time/:line", (req, res) => {
  axios
    .get(baseurl + "/FlightStatusList/getFlightStatusList", {
      params: {
        serviceKey: servicekey,
        schStTime: req.params.time,
        schEdTime: "2400",
        schLineType: req.params.line,
        schIOType: "O",
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/AirportParking/airportparkingRT", (req, res) => {
  axios
    .get(baseurl + "/AirportParking/airportparkingRT", {
      params: {
        serviceKey: servicekey,
      },
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/AirportParking/airportparking/:airport", (req, res) => {
  axios
    .get(baseurl + "/AirportParkingCongestion/airportParkingCongestionRT", {
      params: {
        schAirportCode: req.params.airport,
        serviceKey: servicekey,
        numOfRows: 10,
        pageNo: 1,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/FlightScheduleList/getDflightScheduleList", (req, res) => {
  axios
    .get(baseurl + "/FlightScheduleList/getDflightScheduleList", {
      params: {
        ...req.query,
        serviceKey: servicekey,
        numOfRows: 7,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/FlightScheduleList/getDflightScheduleListv1", (req, res) => {
  axios
    .get(baseurl + "/FlightScheduleList/getDflightScheduleList", {
      params: {
        ...req.query,
        serviceKey: servicekey,
        numOfRows: 7,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/AirportCodeList/getAirportCodeList/:pagenumber", (req, res) => {
  axios
    .get(baseurl + "/AirportCodeList/getAirportCodeList", {
      params: {
        serviceKey: servicekey,
        pageNo: req.params.pagenumber,
        numOfRows: 30,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/FlightScheduleList/getIflightScheduleList", (req, res) => {
  axios
    .get(baseurl + "/FlightScheduleList/getIflightScheduleList", {
      params: {
        ...req.query,
        serviceKey: servicekey,
        numOfRows: 7,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/FlightScheduleList/getIflightScheduleList", (req, res) => {
  axios
    .get(baseurl + "/FlightScheduleList/getIflightScheduleList", {
      params: {
        ...req.query,
        serviceKey: servicekey,
        numOfRows: 7,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/AirportBusInfo/businfo/:pagenumber/:bus", (req, res) => {
  axios
    .get(baseurl + "/AirportBusInfo/businfo", {
      params: {
        serviceKey: servicekey,
        pageNo: req.params.pagenumber,
        numOfRows: 10,
        schAirport: req.params.bus === "all" ? "" : req.params.bus,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});
route.get("/AirportBusInfo/businfo/:pagenumber/:bus", (req, res) => {
  axios
    .get(baseurl + "/AirportBusInfo/businfo", {
      params: {
        serviceKey: servicekey,
        pageNo: req.params.pagenumber,
        numOfRows: 7,
        schAirport: req.params.bus === "all" ? "" : req.params.bus,
      },
      headers: headerConfig,
    })
    .then((response) => {
      res.json(response.data);
    });
});

module.exports = route;
