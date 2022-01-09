import React, { useState } from "react";
import Screen1 from "./screen1";
import Screen2 from "./screen2";

const Home = () => {
  const [manual, setManual] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setManual(true);
          }}
        >
          Ip Lookup
        </button>
        <button
          onClick={() => {
            setManual(false);
          }}
        >
          Your Ip
        </button>
      </div>
      <div>{manual ? <Screen2 /> : <Screen1 />}</div>
    </div>
  );
};

export default Home;
