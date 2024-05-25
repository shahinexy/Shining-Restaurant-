import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user} = useContext(authContext)
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: ['admin'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;