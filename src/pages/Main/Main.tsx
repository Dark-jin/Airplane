import React, { useEffect } from "react";
import { liveairplane } from "../../apis/airplane";
import { useRecoilState } from "recoil";
import { liveState } from "../../states/atom";

const Main = () => {
  const [livestate, setliveState] = useRecoilState(liveState);

  useEffect(() => {
    liveairplane(setliveState);
  }, []);
  console.log(livestate);
  return (
    <>
      <h1>AIR AIR AIR</h1>
      <h2>PLANE</h2>
      {livestate.map((item, index) => (
        <div className="card card-side bg-base-100 shadow-xl" key={index}>
          <div className="card-body">
            <h3>비행기명</h3>
            <h2>
              {item.airlineEnglish} ({item.airFln})
            </h2>
            <h2 className="card-title">
              {item.boardingEng}==={item.arrivedEng}
            </h2>
            <p>공항 {item.city}</p>
            <div className="card-actions justify-between">
              시간 : {item.std} {item.line} 게이트 : {item.gate}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Main;
