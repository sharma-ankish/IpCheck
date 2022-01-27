import React from "react";

const Weather = ({ temp_c }) => {
  return (
    <div>
      <p>Weather : {temp_c}°c</p>
    </div>
  );
};

export default Weather;
