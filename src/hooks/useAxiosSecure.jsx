import axios from "axios";

export const axisoSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    axisoSecure.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access-token')
        console.log('request stop by interceptor',token);
        config.headers.authoraization = `Bearer ${localStorage.getItem('access-token')}`
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axisoSecure;
};

export default useAxiosSecure;
