import React from "react";
import { liveListTpye, domasticType, parkingType } from "../type";
import { atom } from "recoil";

const liveState = atom<liveListTpye>({
  key: "liveData",
  default: [
    {
      airFln: "string",
      airlineEnglish: "string",
      airlineKorean: "string",
      airport: "string",
      arrivedEng: "string",
      arrivedKor: "string",
      boardingEng: "string",
      boardingKor: "string",
      city: "string",
      etd: "string",
      flightDate: "string",
      gate: 0,
      io: "string",
      line: "string",
      rmkEng: "string",
      rmKor: "string",
      std: "string",
    },
  ],
});
const totalliveState = atom<number>({
  key: "totalData",
  default: 1,
});
const domasticState = atom<domasticType>({
  key: "domasticData",
  default: [
    {
      eng: "GMP",
      kor: "김포/서울",
    },
    {
      eng: "ICN",
      kor: "인천",
    },
    {
      eng: "PUS",
      kor: "김해/부산",
    },
    {
      eng: "TAE",
      kor: "대구",
    },
    {
      eng: "CJJ",
      kor: "청주",
    },
    {
      eng: "KUV",
      kor: "군산",
    },
    {
      eng: "RSU",
      kor: "여수",
    },
    {
      eng: "MWX",
      kor: "원주",
    },
    {
      eng: "KPO",
      kor: "포항",
    },
    {
      eng: "HIN",
      kor: "사천",
    },
    {
      eng: "MWX",
      kor: "무안",
    },
    {
      eng: "KWJ",
      kor: "광주",
    },
    {
      eng: "YNY",
      kor: "양양",
    },
    {
      eng: "USN",
      kor: "울산",
    },
    {
      eng: "CJU",
      kor: "제주",
    },
  ],
});
const parkingState = atom<parkingType>({
  key: "parkingData",
  default: [
    {
      aprEng: "",
      aprKor: "",
      parkingAirportCodeName: "",
      parkingFullSpace: "",
      parkingGetdate: "",
      parkingGettime: "",
      parkingIincnt: 0,
      parkingIoutcnt: 0,
      parkingIstay: 0,
    },
  ],
});
export { liveState, totalliveState, domasticState, parkingState };
