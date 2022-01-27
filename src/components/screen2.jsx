import React, { useState } from "react";
import { GetIpLookup } from "../api/getIpLookup";
import { verifyIp } from "../api/verifyIp";

const Screen2 = ({ setData, setErr }) => {
  const [ip, setIp] = useState("");
  const handleClick = () => {
    if (verifyIp(ip)) {
      GetIpLookup(ip, setData, setErr);
    } else alert("Please enter a valid IPv4 address.");
  };
  return (
    <div className="my-3 px-4">
      <div className="searchBar">
        <input
          type="text"
          onChange={(e) => {
            setIp(e.target.value);
          }}
          value={ip}
          placeholder="Ip Address"
        />
        <button onClick={handleClick} className="btn1">
          Search
        </button>
      </div>
    </div>
  );
};

export default Screen2;
