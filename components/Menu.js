import { Nav, NavItem, NavLink } from "reactstrap";
import Link from "next/link";
const Menu = () => {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink>
          <Link href="/">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link href="/about">About</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Menu;