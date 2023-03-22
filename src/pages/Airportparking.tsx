import React, { useEffect, useState } from "react";
import Parkingmodal from "../components/Parkingmodal";
import { useNavigate } from "react-router-dom";

const Airportparking = () => {
  const [modalnumber, setModalnumber] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const homeclick = () => {
    navigate("/");
  };

  const gmpparking = () => {
    setModalnumber("my-modal-1");
    setName("김포국제공항");
  };
  const pusparking = () => {
    setModalnumber("my-modal-2");
    setName("김해국제공항");
  };
  const cjuparking = () => {
    setModalnumber("my-modal-3");
    setName("제주국제공항");
  };
  const taeparking = () => {
    setModalnumber("my-modal-4");
    setName("대구국제공항");
  };
  const kwjparking = () => {
    setModalnumber("my-modal-5");
    setName("광주공항");
  };
  const rsuparking = () => {
    setModalnumber("my-modal-6");
    setName("여수공항");
  };
  const usnparking = () => {
    setModalnumber("my-modal-7");
    setName("울산공항");
  };
  const kuvparking = () => {
    setModalnumber("my-modal-8");
    setName("군산공항");
  };
  const wjuparking = () => {
    setModalnumber("my-modal-9");
    setName("원주공항");
  };
  const cjjparking = () => {
    setModalnumber("my-modal-10");
    setName("청주국제공항");
  };
  const hinparking = () => {
    setModalnumber("my-modal-11");
    setName("사천공항");
  };
  const mwxparking = () => {
    setModalnumber("my-modal-12");
    setName("무안국제공항");
  };
  const ynyparking = () => {
    setModalnumber("my-modal-13");
    setName("양양국제공항");
  };
  return (
    <div>
      <div className="text-start">
        <button className="btn btn-ghost text-xl" onClick={homeclick}>
          HOME
        </button>
      </div>
      <div className="font-bold text-4xl mb-8">실시간 주차장</div>
      <Parkingmodal modalnumber={modalnumber} name={name} />
      <div className="pr-8 pl-8 border-solid border-black border-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="mt-8">
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
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
            <div className=" bg-slate-300">
              <label
                htmlFor="my-modal-13"
                className="btn mt-8 mb-8 bg-blue-600"
                onClick={ynyparking}
              >
                양양국제공항
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Airportparking;
