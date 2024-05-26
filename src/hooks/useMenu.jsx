
import { useQuery } from "@tanstack/react-query";
import useAxoisPublic from "./useAxoisPublic";

const useMenu = () => {
    const axiosPublic = useAxoisPublic()

    const {data: menuItems = [], isPending: loader, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })

    
    return {menuItems, loader, refetch};
};

export default useMenu;