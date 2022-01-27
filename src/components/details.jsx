import React from "react";

const Details = ({
  ip,
  city,
  country,
  continent,
  latitude,
  longitude,
  timezone,
  gmt,
  org
}) => {
  return (
    <div className="px-4 py-3">
      <div className="block1">
        {continent ? continent : "N/A"}
        <div className="city">
          {city ? city : "N/A"},
          <span className="contry">{country ? country : "N/A"}</span>
        </div>
      </div>
      <div className="block2">
        <div>
          Time zone :{" "}
          <span className="smallBold"> {timezone ? timezone : "N/A"} </span>
        </div>
        <div>
          Local time : <span className="smallBold"> {gmt ? gmt : "N/A"} </span>
        </div>
        <div>
          Coordinates :{" "}
          <span className="smallBold">
            {" "}
            {latitude}, {longitude}
          </span>
        </div>
        <div>
          Provider : <span className="smallBold">{org ? org : "N/A"}</span>
        </div>
      </div>
      <div className="block3">
        <div>
          Ip Address <br />
          <span className="highBold">{ip}</span> <br />
        </div>
      </div>
    </div>
  );
};
export default Details;
