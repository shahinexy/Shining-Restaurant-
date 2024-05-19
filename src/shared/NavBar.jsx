import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = <>
        <NavLink to={'/'}> Home</NavLink>
        <NavLink to={'/ourMenu'}>Our Menu</NavLink>
        <NavLink to={'/ourShop'}>Our Shop</NavLink>
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
          <NavbarItem className="hidden lg:flex">
            <Link to={'/login'}>Login</Link>
          </NavbarItem>
          <NavbarItem>
          <Link to={`/`}>
          <Button color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </Link>
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
