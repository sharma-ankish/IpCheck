import React, { useEffect, useState } from "react";
import { GetData } from "../api/getData";
import { GetIp } from "../api/getIp";

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
        <h1>
          Here is your ip address: {ip} <br /> located at {data.location.name}{" "}
          in {data.location.region}
        </h1>
      ) : err ? (
        <h1>Sorry error occured</h1>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Screen1;
