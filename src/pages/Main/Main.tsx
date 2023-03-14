import React, { useEffect } from "react";
import { liveairplane } from "../../apis/airplane";

const Main = () => {
  useEffect(() => {
    liveairplane();
  }, []);
  return (
    <>
      <h1>AIR AIR AIR</h1>
      <h2>PLANE</h2>
    </>
  );
};
export default Main;
