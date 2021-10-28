import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

const body = "/json/";

export { api, body };
