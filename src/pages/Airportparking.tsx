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
          <div key={index}>
            <div>{item.aprEng}</div>
            <div>{item.aprKor}</div>
            <div>{item.parkingAirportCodeName}</div>
            <div>{item.parkingFullSpace}</div>
            <div>{item.parkingGetdate}</div>
            <div>{item.parkingGettime}</div>
            <div>{item.parkingIincnt}</div>
            <div>{item.parkingIoutcnt}</div>
            <div>{item.parkingIstay}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Airportparking;
