import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

export const axisoSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { logOutUser } = useContext(authContext);
  const navigate = useNavigate();
  // interceptor request
  axisoSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      // console.log('request stop by interceptor',token);
      config.headers.authoraization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptor responce
  axisoSecure.interceptors.response.use(
    (responce) => {
      return responce;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error inte interseptor", error);
      if (status === 401 || status === 403) {
        await logOutUser()
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axisoSecure;
};

export default useAxiosSecure;
