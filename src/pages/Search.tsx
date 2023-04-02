import { domesticsearch } from "../apis/airplane";
import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import { domesticState } from "../states/atom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [domestic, setDomestic] = useRecoilState(domesticState);
  const [value, setValue] = useState<Dayjs | null>(null);
  let year = Number(value?.year());
  let month = String(Number(value?.month()) + 1);
  let day = String(Number(value?.date()));
  const [check, setCheck] = useState(false);

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
    await domesticsearch(date, setDomestic);
    console.log(domestic);
    setCheck(true);
  };
  const homeclick = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="text-start">
        <button className="btn btn-ghost text-xl" onClick={homeclick}>
          HOME
        </button>
      </div>
      <h1>Search</h1>
      <div className="grid grid-cols-2">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              value={value}
              onChange={(value) => setValue(value)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <button
            onClick={searchbtn}
            className="btn btn-ghost text-base font-bold"
          >
            검색
          </button>
        </div>
      </div>

      {check && (
        <div className="mt-4">
          {domestic.map((item, index) => (
            <div key={index} className="flex flex-col w-full border-opacity-50">
              <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <div className="text-lg font-bold">{item.airlineEnglish}</div>
                <div className="text-lg font-bold">{item.airlineKorean}</div>
                <div className="grid grid-rows-3">
                  <div className="grid grid-cols-3 mt-4 gap-5 text-2xl font-bold">
                    <div>
                      {item.domesticStartTime.toString().substring(0, 2)} :{" "}
                      {item.domesticStartTime.toString().substring(2, 4)}
                    </div>
                    <div>=====✈️=====</div>
                    <div>
                      {item.domesticArrivalTime.toString().substring(0, 2)} :{" "}
                      {item.domesticArrivalTime.toString().substring(2, 4)}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 mt-4 text-xl font-bold gap-6">
                    <div>{item.startcity}</div>
                    <div>
                      {Number(
                        item.domesticArrivalTime.toString().substring(0, 2)
                      ) -
                        Number(
                          item.domesticStartTime.toString().substring(0, 2)
                        )}
                      h{" "}
                      {Number(
                        item.domesticArrivalTime.toString().substring(2, 4)
                      ) -
                        Number(
                          item.domesticStartTime.toString().substring(2, 4)
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
              {index !== 9 ? <div className="divider">OR</div> : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;
