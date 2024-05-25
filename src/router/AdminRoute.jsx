import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Spinner } from "@nextui-org/react";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return <div className="w-full h-screen flex justify-center items-center"> <Spinner label="Warning" color="warning" labelColor="warning"/></div>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to={'/'} state={{from: location}} replace></Navigate>;
};

export default AdminRoute;