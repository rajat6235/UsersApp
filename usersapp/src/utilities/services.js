import axios from "axios";


export default async function GetData () {
    const url = `https://picsum.photos/v2/list`
  try {
    let response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(`error ${error}`);
  }
}