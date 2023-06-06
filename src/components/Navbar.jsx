import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (

    <Nav>
      <Logo>
        <Link to='/'>
          <h3>The Drunken Spirits</h3>
        </Link>  
      </Logo>

      {/* Hamburger icon for smaller screens */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      
      <NavMenu isOpen={isOpen}>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
      </NavMenu>
      
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
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
    align-items: center;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`

// Logo Style
const Logo = styled.h3`
  h3 {
    display: flex;
    padding: 1rem 0;
    font-weight: 800;
    font-size: 1.8rem;
    color: white;
    font-style: none;
    font-family: 'Lobster', sans-serif;
  }
    
  a {
    text-decoration: none;
  } 
`

// Menu Style
const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap; 
  position: relative;
  text-decoration: none;

  @media (max-width: 700px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in-out;
  }

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
    color: white;
  } 
`

export default Navbar
