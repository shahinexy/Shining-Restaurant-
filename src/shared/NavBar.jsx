import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const {user, logOutUser} = useContext(authContext)
  const [cart] = useCart()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = <>
        <NavLink to={'/'}> Home</NavLink>
        <NavLink to={'/ourMenu'}>Our Menu</NavLink>
        <NavLink to={'/ourShop/salad'}>Our Shop</NavLink>
  </>
  return (
    <div className="fixed top-0 z-20 w-full ">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="bg-black/50  text-white"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          {navItems}
          
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
          {
            user ?
            <>
            <Link to={'/dashboard/cart'}><small className="text-orange-500 bg-gray-200 px-3 py-2 mr-5 cursor-pointer">Cart +{cart.length}</small></Link>
            <small className="mr-3">{user?.displayName || 'Unknown'}</small>
            <Button onClick={()=> logOutUser()} color="warning" variant="flat">
                Logout
              </Button>
            </>
            :
            <Link to={`/login`}>
            <Button color="warning" variant="flat">
                Login
              </Button>
            </Link>
          }
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
        {navItems}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
