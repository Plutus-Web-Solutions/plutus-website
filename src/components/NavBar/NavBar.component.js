import React from 'react'
import {NavHeading, NavLink, NavLinks, NavLinkButton } from './NavBar.styles'
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => {
    return (
        <Container fluid style={{padding:"1em"}}>
                <Row>
                    <Col lg={7} md={6} sm={3} xs={3}>
                        <NavHeading>
                        PLUTUS
                        </NavHeading>
                    </Col>
                    
                    <Col lg={5} md={6} sm={9} xs={9}>
                        <NavLinks className="align-items-center">
                            <NavLink>Home</NavLink>
                            <NavLink>About Us</NavLink>
                            <NavLink>Portfolio</NavLink>
                            <NavLinkButton>Let's Talk</NavLinkButton>
                        </NavLinks>
                    </Col>
                    
                </Row>
        </Container>
       
    )
}

export default NavBar