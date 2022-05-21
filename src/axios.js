import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/amaznclone2022/us-central1/api", //the API (cloud funct) URL
});

export default instance;
