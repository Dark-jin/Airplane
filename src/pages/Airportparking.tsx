import React, { useEffect } from "react";
import { liveparking } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { parkingState } from "../states/atom";

const Airportparking = () => {
  const [parking, setParking] = useRecoilState(parkingState);
  useEffect(() => {
    liveparking(setParking);
  }, []);
  return (
    <div>
      <h1>Airportparking</h1>
      <div>
        {parking.map((item, index) => (
          <div key={index} className="mt-5">
            <div>공항명(영어) : {item.aprEng}</div>
            <div>공항명(한글) : {item.aprKor}</div>
            <div>주차장 : {item.parkingAirportCodeName}</div>
            <div>전체 주차면 수 : {item.parkingFullSpace}</div>
            <div>업데이트 일자 : {item.parkingGetdate}</div>
            <div>업데이트 시간 : {item.parkingGettime}</div>
            <div>입고된 차량 수 : {item.parkingIincnt}</div>
            <div>출고된 차량 수 : {item.parkingIoutcnt}</div>
            <div>현재 주차되어 있는 차량 수 : {item.parkingIstay}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Airportparking;
