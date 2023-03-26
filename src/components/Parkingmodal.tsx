import { useEffect, useState } from "react";
import { liveparking, liveparkingcongestion } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { parkingState, parkingcongestionState } from "../states/atom";

interface props {
  modalnumber: string;
  name: string;
  airport: string;
}

const Parkingmodal = (props: props) => {
  const [parking, setParking] = useRecoilState(parkingState);
  const [parkingcongestion, setParkingcongestion] = useRecoilState(
    parkingcongestionState
  );
  const { modalnumber, name, airport } = props;
  const [max, setMax] = useState(0);

  useEffect(() => {
    liveparking(setParking);
  }, []);
  useEffect(() => {
    liveparkingcongestion(airport, setParkingcongestion);
  }, [airport]);

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
                <div>
                  <div className="font-bold text-lg">{item.aprEng}</div>
                  <div className="font-bold text-lg">{item.aprKor}</div>
                  <div className="font-bold text-base">
                    주차장 : {item.parkingAirportCodeName}
                  </div>
                  <div className="font-bold text-base">
                    전체 주차면 수 : {item.parkingFullSpace}
                  </div>
                  <div className="font-bold text-lg">
                    업데이트 시간 : {item.parkingGettime}
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
