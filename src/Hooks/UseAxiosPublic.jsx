import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://tourisst.vercel.app",

})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;