import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavHeading, NavLink, NavLinks, NavLinkButton } from "./NavBar.styles";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './NavBar.scss'
import ScriptTag from 'react-script-tag';

const NavBar = ({ active }) => {
  const [isActive, setActive] = useState(true)
  const toggleClass = () => {
    setActive(!isActive)
    console.log(isActive)
  }
  return (
    <>
    <Container fluid style={{ padding: "1em" }}>
      <Row>
        <Col lg={7} md={6} sm={3} xs={3}>
          <NavHeading>PLUTUS</NavHeading>
        </Col>
    
        <Col lg={5} md={6} sm={9} xs={9}>
          <NavLinks className="align-items-center">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <NavLink active={active === "Home"}>Home</NavLink>
            </Link>

            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavLink active={active === "About"}>About Us</NavLink>
            </Link>

            <Link
              to="/portfolio"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavLink active={active === "Portfolio"}>Portfolio</NavLink>
            </Link>

            <NavLinkButton>Let's Talk</NavLinkButton>
          </NavLinks>
        </Col>
      </Row>
    </Container>
    <header class="header">
  <div class="logo"><a href="/">Logo</a></div>
  <div class=  {isActive ? 'active' : 'reverse_anim'} class='hambergur' onClick={toggleClass}>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <nav class="navbar fullscreen">
    <ul>
      <li styles={"--animation-order: 1;"}><a href="/">Home</a></li>
      <li styles={"--animation-order: 2;"}><a href="/">About</a></li>
      <li styles={"--animation-order: 3;"}><a href="/">Contact</a></li>
      <li styles={"--animation-order: 4;"}><a href="/">services</a></li>
      <li styles={"--animation-order: 5;"}><a href="/">Blogs</a></li>

    </ul>
    <div class="close">
      <div></div>
    </div>
  </nav>
</header>

    </>
  )}


export default NavBar;
