import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h2 className="logo">
              <span>Web</span>
              Dev
            </h2>
          </div>
          <div className="nav-links">
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
