import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxoisPublic = () => {
    return axiosPublic;
};

export default useAxoisPublic;