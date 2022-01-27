import axios from "axios";
export const GetIpLookup = async (ip, setData, setErr) => {
  var options = {
    method: "GET",
    url:
      "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation",
    params: { ip: ip, apikey: "873dbe322aea47f89dcf729dcc8f60e8" },
    headers: {
      "x-rapidapi-host":
        "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
      "x-rapidapi-key": "84624619c6mshee57099600047a7p1d7266jsne2475624f945"
    }
  };
  try {
    const res = await axios.request(options);
    setData(res.data);
  } catch (error) {
    setErr(true);
    setData();
    console.log(error);
  }
};
