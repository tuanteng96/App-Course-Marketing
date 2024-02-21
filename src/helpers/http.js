import axios from "axios";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_HOST,
      timeout: 10000,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      //withCredentials: true
    });
    this.instance.interceptors.request.use(
      (config) => {
        // if (this.accessToken) {
        //   config.headers.Authorization = 'Bearer ' + this.accessToken
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // Add response interceptor
    this.instance.interceptors.response.use(
      ({ data, headers }) => {
        return {
          data,
          headers: {
            Date: headers["server-time"] || "",
          },
        };
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;
export default http;
