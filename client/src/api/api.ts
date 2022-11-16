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

export async function postHumor(form_data: FormData): Promise<any> {
  try {
    await axios.post(info.url + `/humor`, form_data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
};

export async function getHumorImg(img_path: string): Promise<any> {
  // console.log(`/humor/img/${img_path}`)
  try {
    const res = await axios.get(info.url + `/humor/img`, {
      params: {
        img_path: img_path
      }, responseType: 'blob'
    });
    return res;
  } catch (err) {
    console.log(err);
  }
  return [];
};