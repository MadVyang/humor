import axios from "axios";
import info from "./api_info";

export async function getUsers(): Promise<any> {
  try {
    const res = await axios.get(info.url + '/users');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};