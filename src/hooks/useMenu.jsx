import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setmenuItems] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
      fetch("http://localhost:5000/menu")
        .then((res) => res.json())
        .then((data) => {
            setmenuItems(data)
            setLoader(false)
        });
    }, []);
    return {menuItems, loader};
};

export default useMenu;