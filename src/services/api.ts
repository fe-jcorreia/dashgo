import axios from "axios";
import { database } from "faker";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});