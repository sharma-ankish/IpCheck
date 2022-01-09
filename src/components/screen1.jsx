import React, { useState } from "react";
import { GetIp } from "../api/getIp";

const Screen1 = () => {
  const [ip, setIp] = useState();
  const [err, setErr] = useState();
  try {
    GetIp(setIp, setErr);
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      {ip ? (
        <h1>Here is your ip address: {ip}</h1>
      ) : err ? (
        <h1>Sorry error occured : {err}</h1>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Screen1;
