import { useEffect, useState } from "react";
import { liveparking, liveparkingcongestion } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { parkingState, parkingcongestionState } from "../states/atom";

interface props {
  modalnumber: string;
  name: string;
}

const Parkingmodal = (props: props) => {
  const [parking, setParking] = useRecoilState(parkingState);
  const { modalnumber, name } = props;

  useEffect(() => {
    liveparking(setParking);
  }, []);

  return (
    <div>
      <input type="checkbox" id={modalnumber} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={modalnumber}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h2>PARKING</h2>
          {parking.map((item, index) => (
            <div key={index} className="mt-5">
              {item.aprKor === name ? (
                <div className="card w-96 ml-8 border-4 border-solid">
                  <div className="font-bold text-xl mt-2">{item.aprEng}</div>
                  <div className="font-bold text-xl mt-2">{item.aprKor}</div>
                  <div className="font-bold text-xl mt-2">
                    주차장 : {item.parkingAirportCodeName}
                  </div>
                  <div className="mt-2 font-bold text-xl">
                    전체 주차면 수 : {item.parkingFullSpace}
                  </div>
                  <div className="mt-2 text-xl font-bold">
                    주차 가능 차량 수 :{" "}
                    {Number(item.parkingFullSpace) - item.parkingIstay}
                  </div>
                  <div className="mt-2 text-xl font-bold">
                    주차장 혼잡률 :
                    {Number(
                      (
                        (item.parkingIstay / Number(item.parkingFullSpace)) *
                        100
                      ).toFixed(2)
                    ) < 90
                      ? "원할"
                      : Number(
                          (
                            (item.parkingIstay /
                              Number(item.parkingFullSpace)) *
                            100
                          ).toFixed(2)
                        ) >= 95
                      ? "만차"
                      : "혼잡"}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Parkingmodal;
