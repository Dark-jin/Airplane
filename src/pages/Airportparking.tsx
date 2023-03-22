import React, { useEffect, useState } from "react";
import Parkingmodal from "../components/Parkingmodal";

const Airportparking = () => {
  const [modalnumber, setModalnumber] = useState("");
  const [name, setName] = useState("");

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
      <Parkingmodal modalnumber={modalnumber} name={name} />
      <div className="grid grid-cols-4 gap-10">
        <div>
          <label htmlFor="my-modal-1" className="btn" onClick={gmpparking}>
            김포국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-2" className="btn" onClick={pusparking}>
            김해국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-3" className="btn" onClick={cjuparking}>
            제주국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-4" className="btn" onClick={taeparking}>
            대구국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-5" className="btn" onClick={kwjparking}>
            광주공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-6" className="btn" onClick={rsuparking}>
            여수공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-7" className="btn" onClick={usnparking}>
            울산공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-8" className="btn" onClick={kuvparking}>
            군산공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-9" className="btn" onClick={wjuparking}>
            원주공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-10" className="btn" onClick={cjjparking}>
            청주국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-11" className="btn" onClick={hinparking}>
            사천국제공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-12" className="btn" onClick={mwxparking}>
            무안공항
          </label>
        </div>
        <div>
          <label htmlFor="my-modal-13" className="btn" onClick={ynyparking}>
            양양국제공항
          </label>
        </div>
      </div>
    </div>
  );
};
export default Airportparking;
