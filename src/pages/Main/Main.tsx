import React, { useEffect } from "react";
import { liveairplane } from "../../apis/airplane";
import { useRecoilState } from "recoil";
import { liveState } from "../../states/atom";

const Main = () => {
  const [livestate, setliveState] = useRecoilState(liveState);

  useEffect(() => {
    liveairplane(setliveState);
  }, []);

  return (
    <>
      <h1>AIR AIR AIR</h1>
      <h2>PLANE</h2>
      <div>
        {livestate.map((item, index) => {
          item[index].airFln;
        })}
      </div>
    </>
  );
};
export default Main;
