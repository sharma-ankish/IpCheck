import axios from "axios";
export const GetData = async (ip, setData, setErr) => {
  var options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: ip },
    headers: {
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      "x-rapidapi-key": "84624619c6mshee57099600047a7p1d7266jsne2475624f945"
    }
  };
  try {
    const res = await axios.request(options);
    setData(res.data);
  } catch (error) {
    console.log(error);
    setErr(true);
  }
};
