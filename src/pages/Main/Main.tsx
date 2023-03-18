import React, { useEffect } from "react";
import { liveairplane, totallive } from "../../apis/airplane";
import { useRecoilState } from "recoil";
import { liveState, totalliveState } from "../../states/atom";

const Main = () => {
  const [livestate, setliveState] = useRecoilState(liveState);
  const [total, setTotal] = useRecoilState(totalliveState);
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const nowtime = hours.toString() + minutes.toString();

  useEffect(() => {
    totallive(setTotal);
    liveairplane(setliveState, Math.ceil(total / 10), nowtime);
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
            </div>
            <div className="text-xl font-bold mt-6">{item.city}</div>
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Main;
