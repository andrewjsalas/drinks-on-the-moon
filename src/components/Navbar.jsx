import { Link } from "react-router-dom"
import styled from "styled-components"

function Navbar() {
  return (

    <Nav>
      <Logo>
        Drinks on the Moon
      </Logo>

      <NavMenu>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
      </NavMenu>
      <Hamburger></Hamburger>
      <Hamburger></Hamburger>
      <Hamburger></Hamburger>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  background-color: #090A0C;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 4rem;
`
const Hamburger = styled.span`
  display: none;
`

// Logo Style
const Logo = styled.h3`
  display: flex;
  padding: 1rem 0;
  font-weight: 800;
  font-size: 1.8rem;
  color: white;
  font-family: 'Oswald', sans-serif;
`

// Menu Style
const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap: 
  position: relative;
  text-decoration: none;

  

  li {
    list-style: none;
    transition: all 0.3s ease-in-out;

    &:hover {
    color: #998D85;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: white
  } 
`




export default Navbar
