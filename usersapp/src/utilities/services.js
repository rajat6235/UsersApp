import axios from "axios";


export default function GetData() {
    const url = `https://picsum.photos/v2/list`
  try {
    let response = axios.get(url);
    return response;
  } catch (error) {
    console.log(`error ${error}`);
  }
}