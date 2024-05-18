import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = <>
        <NavLink> Home</NavLink>
        <NavLink>About</NavLink>
  </>
  return (
    <div>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          {navItems}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
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
