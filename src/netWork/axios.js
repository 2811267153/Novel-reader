import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://yuenov.com",
    timeout: 5000,
  });
  return instance(config);
}