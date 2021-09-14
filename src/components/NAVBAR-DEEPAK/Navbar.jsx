import React, { useState } from "react";

import {
  Hamburger,
  Navbar,
  NavContent,
  NavItem,
  NavItems,
  NavLink,
  NavLogo,
} from "./Navbar.styles";

const NavBar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  return (
    <Navbar>
      <NavLogo>Logo</NavLogo>
      <Hamburger
        active={isNavVisible}
        onClick={() => setNavVisible(!isNavVisible)}
      >
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavContent active={isNavVisible}>
        <NavItems>
          <NavItem active={isNavVisible} order={1}>
            <NavLink href="/">Home</NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={2}>
            <NavLink href="/">About</NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={3}>
            <NavLink active={isNavVisible} href="/">
              Contact
            </NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={4}>
            <NavLink href="/">Services</NavLink>
          </NavItem>

          <NavItem active={isNavVisible} order={5}>
            <NavLink href="/">Blogs</NavLink>
          </NavItem>
        </NavItems>
      </NavContent>
    </Navbar>
  );
};

export default NavBar;
