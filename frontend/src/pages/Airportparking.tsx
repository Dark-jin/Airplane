import React, { useEffect, useState } from "react";
import Parkingmodal from "../components/Parkingmodal";
import { useNavigate } from "react-router-dom";

const Airportparking = () => {
  const [modalnumber, setModalnumber] = useState("");
  const [name, setName] = useState("");
  const [airport, setAirport] = useState("");
  const navigate = useNavigate();

  const homeclick = () => {
    navigate("/");
  };

  const gmpparking = () => {
    setModalnumber("my-modal-1");
    setName("김포국제공항");
    setAirport("GMP");
  };
  const pusparking = () => {
    setModalnumber("my-modal-2");
    setName("김해국제공항");
    setAirport("PUS");
  };
  const cjuparking = () => {
    setModalnumber("my-modal-3");
    setName("제주국제공항");
    setAirport("CJU");
  };
  const taeparking = () => {
    setModalnumber("my-modal-4");
    setName("대구국제공항");
    setAirport("TAE");
  };
  const kwjparking = () => {
    setModalnumber("my-modal-5");
    setName("광주공항");
    setAirport("KWJ");
  };
  const rsuparking = () => {
    setModalnumber("my-modal-6");
    setName("여수공항");
    setAirport("RSU");
  };
  const usnparking = () => {
    setModalnumber("my-modal-7");
    setName("울산공항");
    setAirport("USN");
  };
  const kuvparking = () => {
    setModalnumber("my-modal-8");
    setName("군산공항");
    setAirport("KUV");
  };
  const wjuparking = () => {
    setModalnumber("my-modal-9");
    setName("원주공항");
    setAirport("WJU");
  };
  const cjjparking = () => {
    setModalnumber("my-modal-10");
    setName("청주국제공항");
    setAirport("CJJ");
  };
  const hinparking = () => {
    setModalnumber("my-modal-11");
    setName("사천공항");
    setAirport("HIN");
  };
  const mwxparking = () => {
    setModalnumber("my-modal-12");
    setName("무안국제공항");
    setAirport("MWX");
  };
  const ynyparking = () => {
    setModalnumber("my-modal-13");
    setName("양양국제공항");
    setAirport("YNY");
  };
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="text-start">
          <button className="btn btn-ghost text-xl" onClick={homeclick}>
            HOME
          </button>
        </div>
        <div className="font-bold text-4xl mb-8">실시간 주차장</div>
        <div className="font-bold text-end">
          <div className="mb-3">주차장 혼잡률</div>
          95% 이상 만차, 90%이상 혼잡, 90%미만 원할
        </div>
      </div>
      <div className="pr-8 pl-8 border-solid border-black border-8  bg-gray-300">
        <div className="grid grid-cols-4 gap-8">
          <div className="mt-8">
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-1"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={gmpparking}
              >
                김포국제공항
              </label>
            </div>
          </div>
          <div className="mt-8">
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-2"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={pusparking}
              >
                김해국제공항
              </label>
            </div>
          </div>
          <div className="mt-8">
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-3"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={cjuparking}
              >
                제주국제공항
              </label>
            </div>
          </div>
          <div className="mt-8">
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-4"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={taeparking}
              >
                대구국제공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-5"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={kwjparking}
              >
                광주공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-6"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={rsuparking}
              >
                여수공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-7"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={usnparking}
              >
                울산공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-8"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={kuvparking}
              >
                군산공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-9"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={wjuparking}
              >
                원주공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-10"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={cjjparking}
              >
                청주국제공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-11"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={hinparking}
              >
                사천국제공항
              </label>
            </div>
          </div>
          <div>
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-12"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={mwxparking}
              >
                무안공항
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-dashed border-black border-4 bg-white">
              <label
                htmlFor="my-modal-13"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={ynyparking}
              >
                양양국제공항
              </label>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-dashed border-black border-4 bg-white">
              <div className=" mt-8 mb-28"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-dashed border-black border-4 bg-white">
              <div className=" mt-8 mb-28"></div>
            </div>
          </div>
          <div className="mb-8">
            <div className="border-dashed border-black border-4 bg-white">
              <div className=" mt-8 mb-28"></div>
            </div>
          </div>
        </div>
      </div>
      <Parkingmodal modalnumber={modalnumber} name={name} />
    </div>
  );
};
export default Airportparking;
