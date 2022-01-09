import axios from "axios";
export const GetIp = async (setIp, setErr) => {
  try {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIp(res.data.ip);
  } catch (error) {
    setErr(true);
    console.log(error);
  }
};
