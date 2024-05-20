import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

const PrivetRout = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
        return <div className="w-full h-screen flex justify-center items-center"> <Spinner label="Warning" color="warning" labelColor="warning"/></div>
    }

    if(user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>;
};

export default PrivetRout;