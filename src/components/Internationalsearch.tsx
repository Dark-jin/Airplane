import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { internationalsearch } from "../apis/airplane";
import { useRecoilState } from "recoil";
import {
  internationalScheduleState,
  oneinternationalScheduleState,
  totalCount,
} from "../states/atom";
import Loading from "./Loading";

const Internationalsearch = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const [international, setInternational] = useRecoilState(
    internationalScheduleState
  );
  const [oneinternational, setOneInternational] = useRecoilState(
    oneinternationalScheduleState
  );
  const [startcity, setStartcity] = useState("");
  const [endcity, setEndcity] = useState("");
  const [depart, setDepart] = useState("");
  const [arrive, setArrive] = useState("");
  const [totalcount, setTotalcount] = useRecoilState(totalCount);
  const [check, setCheck] = useState(false);
  const [pagenumber, setPagenumber] = useState(1);
  const page = Math.ceil(Number(totalcount) / 10);
  let year = Number(value?.year());
  let month = String(Number(value?.month()) + 1);
  let day = String(Number(value?.date()));
  const [loading, setLoading] = useState(true);

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
    await internationalsearch(
      date,
      setInternational,
      depart,
      arrive,
      setTotalcount,
      1,
      setOneInternational
    );
    setCheck(true);
  };
  const pagehandle = (event: React.ChangeEvent<unknown>, value: any) => {
    setPagenumber(value);
  };

  useEffect(() => {});

  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              value={value}
              onChange={(value) => setValue(value)}
            />
          </LocalizationProvider>
        </div>
        <div>
          <input
            type="text"
            placeholder="출발 도시"
            className="input input-bordered max-w-xs"
            onChange={(e) => setDepart(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="도착 도시"
            className="input input-bordered max-w-xs"
            onChange={(e) => setArrive(e.target.value)}
          />
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
      <div className="mt-6">
        {check && (
          <div>
            {international.map((item, index) => (
              <>
                <div
                  key={index}
                  className="grid h-full card bg-base-300 rounded-box place-items-center mt-4"
                >
                  <div className="grid grid-rows-3 font-bold">
                    <div>
                      <div className="text-xl">{item.airlineEnglish}</div>
                      <div className="text-lg">{item.airlineKorean}</div>
                    </div>
                    <div className="grid grid-cols-3 mt-4 text-2xl font-bold">
                      <div>{item.airport}</div>
                      <div>=====✈️=====</div>
                      <div>{item.city}</div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div>{item.airportCode}</div>
                      <div className="text-xl mt-5">
                        출발시간 :{" "}
                        {item.internationalTime.toString().substring(0, 2)} :{" "}
                        {item.internationalTime.toString().substring(2, 4)}
                      </div>
                      <div>{item.cityCode}</div>
                    </div>
                  </div>
                </div>
                <div>
                  {index !== international.length - 1 ? (
                    <div className="divider">OR</div>
                  ) : null}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Internationalsearch;
