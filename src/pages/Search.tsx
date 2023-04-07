import { domesticsearch, pagedomesticsearch } from "../apis/airplane";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Pagination, TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  domesticState,
  domesticScheduleState,
  totalCount,
  onedomesticScheduleState,
} from "../states/atom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import International from "../components/Internationalsearch";

const Search = () => {
  const navigate = useNavigate();
  const [domestic, setDomestic] = useRecoilState(domesticScheduleState);
  const [startcity, setCity] = useRecoilState(domesticState);
  const [endcity, setEndcity] = useRecoilState(domesticState);
  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [totalcount, setTotalcount] = useRecoilState(totalCount);
  const [value, setValue] = useState<Dayjs | null>(null);
  const [check, setCheck] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const [onedomestic, setOnedomestic] = useRecoilState(
    onedomesticScheduleState
  );
  const page = Math.ceil(Number(totalcount) / 10);
  let year = Number(value?.year());
  let month = String(Number(value?.month()) + 1);
  let day = String(Number(value?.date()));
  const [loading, setLoading] = useState(true);
  const [line, setLine] = useState("D");

  if (month !== "10" && month !== "11" && month !== "12") {
    month = "0" + month;
  }
  if (
    day === "1" ||
    day === "2" ||
    day === "3" ||
    day === "4" ||
    day === "5" ||
    day === "6" ||
    day === "7" ||
    day === "8" ||
    day === "9"
  ) {
    day = "0" + day;
  }
  let date = Number(String(year) + month + day);

  const searchbtn = async () => {
    await domesticsearch(
      date,
      setDomestic,
      depart,
      arrive,
      setTotalcount,
      1,
      setOnedomestic
    );
    setCheck(true);
  };
  const homeclick = () => {
    navigate("/");
  };
  const internationalbtn = () => {
    navigate("/airportInfo");
  };
  const pagehandle = (event: React.ChangeEvent<unknown>, value: any) => {
    setPagenumber(value);
  };
  useEffect(() => {
    pagedomesticsearch(
      date,
      setDomestic,
      depart,
      arrive,
      setTotalcount,
      pagenumber,
      setOnedomestic,
      setLoading
    );
  }, [pagenumber]);

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="text-start">
          <button className="btn btn-ghost text-xl" onClick={homeclick}>
            HOME
          </button>
        </div>
        <div className="text-end">
          <button
            className="btn btn-ghost text-lg font-bold"
            onClick={internationalbtn}
          >
            항공정보
          </button>
        </div>
      </div>
      <h1>Search</h1>
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
      {line === "D" ? (
        <div className="grid grid-cols-4 gap-3">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                value={value}
                onChange={(value) => setValue(value)}
              />
            </LocalizationProvider>
          </div>
          <div>
            <select
              className="select w-full max-w-xs select-bordered"
              onChange={(e) => setDepart(e.target.value)}
            >
              <option disabled selected>
                출발 공항(Depart Airport)
              </option>
              {startcity.map((item, index) => (
                <option key={index} value={item.eng}>
                  {item.kor}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="select w-full max-w-xs select-bordered"
              onChange={(e) => setArrive(e.target.value)}
            >
              <option disabled selected>
                도착 공항(Arrive Airport)
              </option>
              {endcity.map((item, index) => (
                <option key={index} value={item.eng}>
                  {item.kor}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              onClick={searchbtn}
              className="btn btn-ghost text-base font-bold border-1 border-black"
            >
              검색
            </button>
          </div>
        </div>
      ) : (
        <International />
      )}
      {check && line == "D" ? (
        <Pagination
          count={page}
          defaultPage={1}
          page={pagenumber}
          onChange={pagehandle}
          className="mt-4"
        />
      ) : null}
      {check && line == "D" ? (
        <div className="mt-4">
          {Number(totalcount) == 1 && !loading ? ( // 데이터가 한개일때
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
              <div className="text-lg font-bold">
                {onedomestic.airlineEnglish}
              </div>
              <div className="text-lg font-bold">
                {onedomestic.airlineKorean}
              </div>
              <div className="grid grid-rows-3">
                <div className="grid grid-cols-3 mt-4 gap-5 text-2xl font-bold">
                  <div>
                    {onedomestic.domesticStartTime.toString().substring(0, 2)} :{" "}
                    {onedomestic.domesticStartTime.toString().substring(2, 4)}
                  </div>
                  <div>=====✈️=====</div>
                  <div>
                    {onedomestic.domesticArrivalTime.toString().substring(0, 2)}{" "}
                    :{" "}
                    {onedomestic.domesticArrivalTime.toString().substring(2, 4)}
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-4 text-xl font-bold gap-6">
                  <div>{onedomestic.startcity}</div>
                  <div>
                    {Number(
                      onedomestic.domesticArrivalTime.toString().substring(2, 4)
                    ) -
                      Number(
                        onedomestic.domesticStartTime.toString().substring(2, 4)
                      ) <
                    0
                      ? Number(
                          onedomestic.domesticArrivalTime
                            .toString()
                            .substring(0, 2)
                        ) -
                        Number(
                          onedomestic.domesticStartTime
                            .toString()
                            .substring(0, 2)
                        ) -
                        1
                      : Number(
                          onedomestic.domesticArrivalTime
                            .toString()
                            .substring(0, 2)
                        ) -
                        Number(
                          onedomestic.domesticStartTime
                            .toString()
                            .substring(0, 2)
                        )}
                    h{" "}
                    {Number(
                      onedomestic.domesticArrivalTime.toString().substring(2, 4)
                    ) -
                      Number(
                        onedomestic.domesticStartTime.toString().substring(2, 4)
                      ) <
                    0
                      ? Number(
                          onedomestic.domesticArrivalTime
                            .toString()
                            .substring(2, 4)
                        ) -
                        Number(
                          onedomestic.domesticStartTime
                            .toString()
                            .substring(2, 4)
                        ) +
                        60
                      : Number(
                          onedomestic.domesticArrivalTime
                            .toString()
                            .substring(2, 4)
                        ) -
                        Number(
                          onedomestic.domesticStartTime
                            .toString()
                            .substring(2, 4)
                        )}
                    m
                  </div>
                  <div>{onedomestic.arrivalcity}</div>
                </div>
                <div className="grid grid-cols-3 text-base gap-6">
                  <div>{onedomestic.startcityCode}</div>
                  <div></div>
                  <div>{onedomestic.arrivalcityCode}</div>
                </div>
              </div>
            </div>
          ) : Number(totalcount) > 1 && !loading ? ( // 데이터가 여러개일때
            <div>
              {domestic.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full border-opacity-50"
                >
                  <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                    <div className="text-lg font-bold">
                      {item.airlineEnglish}
                    </div>
                    <div className="text-lg font-bold">
                      {item.airlineKorean}
                    </div>
                    <div className="grid grid-rows-3">
                      <div className="grid grid-cols-3 mt-4 gap-5 text-2xl font-bold">
                        <div>
                          {item.domesticStartTime.toString().substring(0, 2)} :{" "}
                          {item.domesticStartTime.toString().substring(2, 4)}
                        </div>
                        <div>=====✈️=====</div>
                        <div>
                          {item.domesticArrivalTime.toString().substring(0, 2)}{" "}
                          :{" "}
                          {item.domesticArrivalTime.toString().substring(2, 4)}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 mt-4 text-xl font-bold gap-6">
                        <div>{item.startcity}</div>
                        <div>
                          {Number(
                            item.domesticArrivalTime.toString().substring(2, 4)
                          ) -
                            Number(
                              item.domesticStartTime.toString().substring(2, 4)
                            ) <
                          0
                            ? Number(
                                item.domesticArrivalTime
                                  .toString()
                                  .substring(0, 2)
                              ) -
                              Number(
                                item.domesticStartTime
                                  .toString()
                                  .substring(0, 2)
                              ) -
                              1
                            : Number(
                                item.domesticArrivalTime
                                  .toString()
                                  .substring(0, 2)
                              ) -
                              Number(
                                item.domesticStartTime
                                  .toString()
                                  .substring(0, 2)
                              )}
                          h{" "}
                          {Number(
                            item.domesticArrivalTime.toString().substring(2, 4)
                          ) -
                            Number(
                              item.domesticStartTime.toString().substring(2, 4)
                            ) <
                          0
                            ? Number(
                                item.domesticArrivalTime
                                  .toString()
                                  .substring(2, 4)
                              ) -
                              Number(
                                item.domesticStartTime
                                  .toString()
                                  .substring(2, 4)
                              ) +
                              60
                            : Number(
                                item.domesticArrivalTime
                                  .toString()
                                  .substring(2, 4)
                              ) -
                              Number(
                                item.domesticStartTime
                                  .toString()
                                  .substring(2, 4)
                              )}
                          m
                        </div>
                        <div>{item.arrivalcity}</div>
                      </div>
                      <div className="grid grid-cols-3 text-base gap-6">
                        <div>{item.startcityCode}</div>
                        <div></div>
                        <div>{item.arrivalcityCode}</div>
                      </div>
                    </div>
                  </div>
                  {index !== domestic.length - 1 ? (
                    <div className="divider">OR</div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>검색 결과가 없습니다.</h1>
              <Loading />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default Search;
