import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <h3>Drinks on the Moon</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
