import React from "react";

const Details = ({ location, current }) => {
  return (
    <div>
      <p>
        {location.name} <br />
        {location.region} <br />
        {location.country}
      </p>
      <p>
        coordinates :{location.lat}, {location.lon}
      </p>
      <p>
        time zone :{location.tz_id} <br />
        local time : {location.localtime}
      </p>
      <p>
        Weather: {current.temp_c}°c {current.condition.text}
      </p>
    </div>
  );
};
export default Details;
