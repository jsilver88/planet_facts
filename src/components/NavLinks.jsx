import { useState } from "react"
import { NavLink } from "react-router-dom"

const navLinks = [
  {
    id: 1,
    name: "Mercury",
    link: "/",
    color: "#DEF4FC",
  },
  {
    id: 2,
    name: "Venus",
    link: "/venus",
    color: "#F7CC7F",
  },
  {
    id: 3,
    name: "Earth",
    link: "/earth",
    color: "#545BFE",
  },
  {
    id: 4,
    name: "Mars",
    link: "/mars",
    color: "#FF6A45",
  },
  {
    id: 5,
    name: "Jupiter",
    link: "/jupiter",
    color: "#ECAD7A",
  },
  {
    id: 6,
    name: "Saturn",
    link: "/saturn",
    color: "#FCCB6B",
  },
  {
    id: 7,
    name: "Uranus",
    link: "/uranus",
    color: "#65F0D5",
  },
  {
    id: 8,
    name: "Neptune",
    link: "/neptune",
    color: "#497EFA",
  },
]

const NavLinks = () => {
  return (
    <ul className="mobile-links">
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <span
            className="dot"
            style={{ backgroundColor: `${navLink.color}` }}
          ></span>
          <NavLink to={navLink.link}>{navLink.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}
export default NavLinks
