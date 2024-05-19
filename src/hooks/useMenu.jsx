import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setmenuItems] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
      fetch("menu.json")
        .then((res) => res.json())
        .then((data) => {
            setmenuItems(data)
            setLoader(false)
        });
    }, []);
    return {menuItems, loader};
};

export default useMenu;