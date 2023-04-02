type liveListTpye = {
  airFln: string;
  airlineEnglish: string;
  airlineKorean: string;
  airport: string;
  arrivedEng: string;
  arrivedKor: string;
  boardingEng: string;
  boardingKor: string;
  city: string;
  etd: string;
  flightDate: string;
  gate: number;
  io: string;
  line: string;
  rmkEng: string;
  rmKor: string;
  std: string;
}[];
type domasticType = {
  eng: string;
  kor: string;
}[];
type parkingType = {
  aprEng: string;
  aprKor: string;
  parkingAirportCodeName: string;
  parkingFullSpace: string;
  parkingGetdate: string;
  parkingGettime: string;
  parkingIincnt: number;
  parkingIoutcnt: number;
  parkingIstay: number;
}[];
type parkingcongestionType = {
  airportEng: string;
  airportKor: string;
  parkingAirportCodeName: string;
  parkingCongestion: string;
  parkingCongestionDegree: string;
  parkingOccupiedSpace: number;
  parkingTotalSpace: number;
  sysGetdate: string;
  sysGettime: string;
}[];
type domesticType = {
  airlineEnglish: string;
  airlineKorean: string;
  arrivalcity: string;
  arrivalcityCode: string;
  domesticArrivalTime: string; // 도착시간
  domesticEddate: string; // 운항 종료일
  domesticStartTime: string; // 출발시간
  domesticStdate: string; // 운항 시작일
  flightPurpose: string;
  startcity: string; // 출발공항
  startcityCode: string;
  numOfRows: number;
}[];
export type {
  liveListTpye,
  domasticType,
  parkingType,
  parkingcongestionType,
  domesticType,
};
