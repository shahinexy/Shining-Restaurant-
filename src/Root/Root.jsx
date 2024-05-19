import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/NavBar";

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;