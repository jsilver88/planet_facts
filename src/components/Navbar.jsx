import { NavLink } from "react-router-dom"
import NavLinks from "./NavLinks"
import { useState } from "react"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className="nav-header">
      <nav className="navbar">
        <p className="logo">The Planets</p>
        <ul className="planet-list">
          <li>
            <NavLink to="/">Mercury</NavLink>
          </li>
          <li>
            <NavLink to="/venus">Venus</NavLink>
          </li>
          <li>
            <NavLink to="/earth">Earth</NavLink>
          </li>
          <li>
            <NavLink to="/mars">Mars</NavLink>
          </li>
          <li>
            <NavLink to="/jupiter">Jupiter</NavLink>
          </li>
          <li>
            <NavLink to="/saturn">Saturn</NavLink>
          </li>
          <li>
            <NavLink to="/uranus">Uranus</NavLink>
          </li>
          <li>
            <NavLink to="/neptune">Neptune</NavLink>
          </li>
        </ul>

        {openMenu && <NavLinks />}

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
