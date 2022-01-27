import React, { useState } from "react";
import { GetIp } from "../api/getIp";
import Details from "./details";
import Icon from "./screen1";
import Screen2 from "./screen2";

const Home = () => {
  const [err, setErr] = useState(false);
  const [data, setData] = useState();
  const handleIp = async () => {
    await GetIp(setData, setErr);
    if (data) {
      setErr(false);
    }
  };
  return (
    <div className="mnSec">
      <Screen2 setData={setData} setErr={setErr} />
      <div style={{ height: "60vh" }}>
        {data ? (
          <>
            <Details {...data} />
          </>
        ) : err ? (
          <p className="m-3 p-2 text-center bg-danger rounded text-light">
            Sorry an error occured <br />
            <small>
              Maybe the ip address you are trying to access is private
            </small>
          </p>
        ) : (
          <Icon />
        )}
      </div>
      <div className="text-center">
        <button onClick={handleIp} className="btn2">
          Your Ip
        </button>
      </div>
    </div>
  );
};

export default Home;
