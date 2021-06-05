import React from 'react'
import { Nav, NavHeading, NavLink, NavLinks } from './NavBar.styles'

const NavBar = () => {
    return (
        <Nav>
            <NavHeading>
            PLUTUS
            </NavHeading>
            <NavLinks>
                <NavLink>Home</NavLink>
                <NavLink>About Us</NavLink>
                <NavLink>Portfolio</NavLink>
                <NavLink className='border'>Let's Talk</NavLink>
            </NavLinks>
        </Nav>
    )
}

export default NavBar