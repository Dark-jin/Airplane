import React, { useEffect } from "react";
import { liveairplane, totallive } from "../../apis/airplane";
import { useRecoilState } from "recoil";
import { liveState, totalliveState, domasticState } from "../../states/atom";

const Main = () => {
  const [livestate, setliveState] = useRecoilState(liveState);
  const [total, setTotal] = useRecoilState(totalliveState);
  const domastic = useRecoilState(domasticState);
  const today = new Date();
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const nowtime = hours.toString() + minutes.toString();

  useEffect(() => {
    totallive(setTotal);
    liveairplane(setliveState, nowtime);
  }, []);
  //Time : {item.std.substring(0, 2)}h {item.std.substring(2, 4)}m
  return (
    <>
      <h1>AIR AIR AIR</h1>
      <h2>PLANE</h2>
      {livestate.map((item, index) => (
        <div
          className="card card-side bg-base-100 shadow-xl mt-4 rounded-xl bg-sky-300"
          key={index}
        >
          <div className="card-body">
            <div className="text-2xl font-bold">
              {item.airlineEnglish} ({item.airFln})
            </div>
            <div className="grid grid-cols-3 mt-6">
              <div className="text-2xl font-bold">{item.boardingEng}</div>
              <div className="text-2xl">======={">"}</div>
              <div className="text-2xl font-bold">{item.arrivedEng}</div>
              <div>{item.boardingKor}</div>
              <div></div>
              <div>{item.arrivedKor}</div>
            </div>
            <div className="text-xl font-bold mt-6">{item.city}</div>
            <div>
              {domastic[0].map((value) =>
                value.eng == item.city ? value.kor : ""
              )}
            </div>
            <div className="grid grid-cols-3 mt-6">
              <div className="text-lg font-semibold">Time : {item.std}</div>
              <div className="text-lg font-semibold">
                {item.line == "국내"
                  ? "Domestic Flight"
                  : item.line == "국제"
                  ? "International Flight"
                  : "No Data"}
              </div>
              <div className="text-lg font-semibold">GATE : {item.gate}</div>
              <div></div>
              <div>{item.line}</div>
              <div></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Main;
