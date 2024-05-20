import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const useCart = () => {
    const {user} = useContext(authContext)
    const axisoSecure = useAxiosSecure()
    const {data: cart = [], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () =>{
            const res = await axisoSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch];
};

export default useCart;