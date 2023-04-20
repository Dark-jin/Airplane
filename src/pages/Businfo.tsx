import { useEffect, useState } from "react";
import { BusinfoAPI } from "../apis/airplane";
import { useRecoilState } from "recoil";
import { businfoState, domesticState } from "../states/atom";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Buisifo = () => {
  const navigate = useNavigate();
  const [bus, setBus] = useRecoilState(businfoState);
  const [domestic, setDomestic] = useRecoilState(domesticState);
  const [startbus, setStartbus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BusinfoAPI(startbus, setBus, setLoading);
  }, [startbus]);
  const homeclick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="text-2xl font-bold" onClick={homeclick}>
          Home
        </div>
        <div className="text-3xl font-bold mt-6">Bus Information</div>
        <div></div>
      </div>
      <div className="mt-6 text-start">
        <select
          className="select w-full max-w-xs select-bordered"
          onChange={(e) => setStartbus(e.target.value)}
        >
          <option disabled selected>
            버스 출발지 선택
          </option>
          {domestic.map((item, index) => (
            <>
              {item.eng !== "USN" ? (
                <option key={index} value={item.eng}>
                  {item.kor}
                </option>
              ) : null}
            </>
          ))}
        </select>
      </div>
      {!loading ? (
        <>
          {bus.map((item, index) => (
            <div key={index} className="card mt-4 outline">
              <div className="grid grid-cols-3">
                <div className="aspect-square rounded-full bg-white w-6 outline"></div>
                <div className="text-xl font-bold">
                  {item.busCategoryKorName}
                </div>
                <div className="text-end">
                  <label
                    htmlFor="my-modal"
                    className="btn w-2 bg-white text-lg hover:bg-white"
                  >
                    📍
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 mt-2 text-lg">
                <div className="font-bold">
                  탑승 장소<div className="mt-2">{item.busDataGetonKor}</div>
                </div>
                <div className="font-bold">
                  버스번호<div className="mt-2">{item.busDataBusNum}</div>
                </div>
              </div>
              {/* <div className="font-bold">버스간격 : {item.busDataEtcKor}</div> */}
              <div className="grid grid-cols-2 mt-2 text-lg">
                {item.busDataCard == null ? null : (
                  <div className="font-bold">
                    카드 요금 : {item.busDataCard}원
                  </div>
                )}
                <div className="font-bold">
                  현금 요금 : {item.busDataMoney}원
                </div>
              </div>
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <div className="grid grid-cols-3">
                    <div></div>
                    <div className="text-3xl font-bold">노선</div>
                    <div>
                      <label
                        htmlFor="my-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                    </div>
                  </div>
                  <div className="mt-2 font-bold">{item.busDataRouteKor}</div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Buisifo;
