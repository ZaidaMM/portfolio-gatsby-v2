import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import logo from "../assets/images/logo.ico"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h2 className="logo">
                <span>ZM</span>
              </h2>
              {/* <img src={logo} alt="logo" /> */}
            </Link>

            <button className="toggle-btn" type="button">
              <FaAlignRight />
            </button>
          </div>
          <div className="nav-links">
            {pageLinks.map(link => {
              return (
                <Link key={link.id} to={link.url}>
                  {link.text}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
