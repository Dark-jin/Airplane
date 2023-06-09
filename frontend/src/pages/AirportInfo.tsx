import { useEffect, useState } from "react";
import { airportinfoAPI } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { airportinfoState } from "../states/atom";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const AirportInfo = () => {
  const navigate = useNavigate();
  const [airportinfo, setAirportinfo] = useRecoilState(airportinfoState);
  const [loading, setLoading] = useState(true);
  const [pagenumber, setPagenumber] = useState(1);
  let totalpage = Math.ceil(1376 / 30);

  useEffect(() => {
    airportinfoAPI(setAirportinfo, pagenumber, setLoading);
  }, [pagenumber]);

  const pagehandle = (e: React.ChangeEvent<unknown>, value: number) => {
    setPagenumber(value);
  };
  const searchbtn = () => {
    navigate("/search");
  };

  return (
    <div>
      <div className="text-start">
        <button className="btn btn-ghost text-xl" onClick={searchbtn}>
          Search
        </button>
      </div>
      <div className="font-bold text-4xl text-center">항공정보</div>
      {!loading ? (
        <div>
          {airportinfo.map((item, index) => (
            <div className="grid grid-cols-3 card w-full bg-blue-500 shadow-lg mt-4 text-white">
              <div key={index} className="font-bold text-lg">
                <div>{item.cityCode}</div>
              </div>
              <div key={index} className="font-bold text-lg">
                <div>{item.cityEng}</div>
              </div>
              <div key={index} className="font-bold text-lg">
                <div>{item.cityKor}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <div>
        <Pagination
          count={totalpage}
          defaultPage={1}
          page={pagenumber}
          onChange={pagehandle}
          className="mt-4 grid place-items-center"
        />
      </div>
    </div>
  );
};
export default AirportInfo;
