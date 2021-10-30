import { useState } from "react";
import Menu from "./Menu";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <header>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Menu />
        </Collapse>
      </Navbar>
    </header>
  );
};
export default NavBar;