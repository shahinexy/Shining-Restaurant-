import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxoisPublic from "../hooks/useAxoisPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
const {googleSignIn} = useContext(authContext)
const axiosPublic = useAxoisPublic()
const navigate = useNavigate()

const handleLogin = ()=>{
    googleSignIn()
    .then(res =>{
        console.log(res.user)
        const userInfo = {
            name: res.user?.displayName,
            email: res.user?.email
        }
        axiosPublic.post('/users', userInfo)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        navigate('/')
    })
}
    return (
        <div className="my-4">
            <Button onClick={handleLogin} className="rounded-none bg-yellow-200"><FaGoogle/>Login</Button>
        </div>
    );
};

export default SocialLogin;