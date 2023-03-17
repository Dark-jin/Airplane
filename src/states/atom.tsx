import React from "react";
import { liveListTpye } from "../type";
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
export { liveState, totalliveState };
