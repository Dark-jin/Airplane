import { useEffect } from "react";
import { liveparking } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { parkingState } from "../states/atom";

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
          <h3>PARKING</h3>
          {parking.map((item, index) => (
            <div key={index} className="mt-5">
              {item.aprKor === name ? (
                <div>
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
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Parkingmodal;
