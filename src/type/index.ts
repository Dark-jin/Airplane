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
type domesticType = {
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
type domesticScheduleType = {
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
}[];
type totalcountType = {
  totalCount: number;
};
type onedomesticScheduleType = {
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
};
type airportinfoType = {
  cityCode: string;
  cityEng: string;
  cityKor: string;
}[];
type internationalScheduleType = {
  airlineEnglish: string; // 항공사영어
  airlineKorean: string; // 항공사한글
  airport: string; // 출발지
  airportcode: string; // 출발지코드
  city: string; // 도착지
  citycode: string; // 도착지코드
  internationalloType: string; // 출입국코드 IN: 입국, OUT: 출국
  internationalNum: string; // 항공편명
  internationalTime: number; // 출발시간
}[];
type oneinternationalScheduleType = {
  airlineEnglish: string; // 항공사영어
  airlineKorean: string; // 항공사한글
  airport: string; // 출발지
  airportcode: string; // 출발지코드
  city: string; // 도착지
  citycode: string; // 도착지코드
  internationalloType: string; // 출입국코드 IN: 입국, OUT: 출국
  internationalNum: string; // 항공편명
  internationalTime: number; // 출발시간
};

export type {
  liveListTpye,
  domesticType,
  parkingType,
  parkingcongestionType,
  domesticScheduleType,
  totalcountType,
  onedomesticScheduleType,
  airportinfoType,
  internationalScheduleType,
  oneinternationalScheduleType,
};
