import axios from "axios";
import info from "./api_info";

export async function getUser(user_id: string | undefined): Promise<any> {
  if (user_id === undefined) {
    console.log('user_id is undefined');
    return null;
  }
  try {
    const res = await axios.get(info.url + `/user/${user_id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export async function getUsers(): Promise<any> {
  try {
    const res = await axios.get(info.url + '/users');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export async function getHumorsByUser(user_id: string | undefined): Promise<any[]> {
  if (user_id === undefined) {
    console.log('user_id is undefined');
    return [];
  }
  try {
    const res = await axios.get(info.url + `/humors/${user_id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return [];
};
export async function postHumor(user_id: string, humor: string, score: Number): Promise<any> {
  try {
    const body = { user_id: user_id, humor: humor, score: score };
    await axios.post(info.url + `/humor`, body, { headers: { 'Content-Type': 'application/json' } });
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
};
