import React, { useEffect, useState } from "react";
import { liveairplane, totallive } from "../../apis/airplane";
import { useRecoilState } from "recoil";
import {
  liveState,
  totalliveState,
  domesticState,
  totalCount,
} from "../../states/atom";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Main = () => {
  const navigate = useNavigate();
  const [livestate, setliveState] = useRecoilState(liveState);
  const [total, setTotal] = useRecoilState(totalliveState);
  const [line, setLine] = useState("D");
  const domastic = useRecoilState(domesticState);
  const today = new Date();
  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const nowtime = hours.toString() + minutes.toString();
  const [loading, setLoading] = useState(true);
  const [totalcount, setTotalcount] = useRecoilState(totalCount);

  const parkingbtn = () => {
    navigate("/airport-parking");
  };
  const searchbtn = () => {
    navigate("/search");
  };
  const homebtn = () => {
    navigate("/");
  };

  useEffect(() => {
    totallive(setTotal);
    liveairplane(setliveState, nowtime, line, setTotalcount, setLoading);
  }, [line]);
  console.log(livestate);

  return !loading ? (
    <>
      <h1 onClick={homebtn}>AIR AIR AIR</h1>
      <h2 onClick={homebtn}>PLANE</h2>
      <div className="grid grid-cols-3">
        <div>
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box p-0 font-bold">
            <li onClick={() => setLine("D")}>
              <a>국내선</a>
            </li>
            <li onClick={() => setLine("I")}>
              <a>국제선</a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-ghost text-base font-bold"
            onClick={searchbtn}
          >
            검색
          </button>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-ghost text-base font-bold"
            onClick={parkingbtn}
          >
            실시간 주차장
          </button>
        </div>
      </div>
      {Number(totalcount) == 0 ? (
        <>
          <h1>🧨 데이터 오류 🧨</h1>
          <Loading />
        </>
      ) : (
        <>
          {livestate.map((item, index) => (
            <>
              {!loading ? (
                <div className="bg-slate-200 rounded-xl" key={index}>
                  <div
                    className="card card-side shadow-xl mt-4 rounded-xl bg-sky-400 ml-12"
                    key={index}
                  >
                    <div className="card-body">
                      <div className="text-2xl font-bold">
                        {item.airlineEnglish} ({item.airFln})
                      </div>
                      <div className="grid grid-cols-3 mt-4">
                        <div className="text-2xl font-bold">
                          {item.boardingEng}
                        </div>
                        <div className="text-2xl">======={">"}</div>
                        <div className="text-2xl font-bold">
                          {item.arrivedEng}
                        </div>
                        <div>{item.boardingKor}</div>
                        <div></div>
                        <div>{item.arrivedKor}</div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div>
                          <div className="text-base font-bold">
                            {item.airport}
                          </div>
                        </div>
                        <div></div>
                        <div>
                          <div className="text-base font-bold">{item.city}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mt-4">
                        <div className="text-xl font-semibold">
                          Time : {item.std.toString().substring(0, 2)}:
                          {item.std.toString().substring(2, 4)}
                        </div>
                        <div className="text-xl font-semibold">
                          {item.line == "국내"
                            ? "Domestic Flight"
                            : item.line == "국제"
                            ? "International Flight"
                            : "No Data"}
                        </div>
                        {item.gate !== null ? (
                          <div className="text-xl font-semibold">
                            GATE : {item.gate}
                          </div>
                        ) : null}
                        <div></div>
                        <div>{item.line}</div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Loading />
              )}
            </>
          ))}
        </>
      )}
    </>
  ) : (
    <Loading />
  );
};
export default Main;
