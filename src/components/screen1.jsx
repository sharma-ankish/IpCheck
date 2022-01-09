import React, { useEffect, useState } from "react";
import { GetData } from "../api/getData";
import { GetIp } from "../api/getIp";
import Details from "../components/details";
const Screen1 = () => {
  const [ip, setIp] = useState();
  const [err, setErr] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    GetIp(setIp, setErr);
    if (ip) {
      setErr(false);
      GetData(ip, setData, setErr);
    }
  }, [ip]);
  return (
    <div>
      {data ? (
        <>
          <h2>{ip}</h2>
          <Details {...data} />
        </>
      ) : err ? (
        <h1>Sorry error occured</h1>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Screen1;
