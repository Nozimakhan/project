import axios from "axios";
import {store} from "../redux/store";

const instance = axios.create({
    baseURL : "https://mold-components.onrender.com",
    headers : {'Content-Type' : 'application/json'},
    timeout:10000
})

instance.interceptors.response.use((response) => {
    if(response) return response
},
(error) => {
  if (error?.response?.status === 401 || error?.response?.status === 403) {
      store.dispatch({type: "LOGOUT"});
  }
  return Promise.reject(error);
})

export { instance };