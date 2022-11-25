import React from "react"
import { FaTimes } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggleNavbar }) => {
  return (
    <>
      <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
        <button type="button" className="close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
        <div className="side-container">
          <ul className={isOpen ? "sidebar-links" : null}>
            {pageLinks.map(link => {
              return (
                <li key={link.id}>
                  <Link
                    to={link.url}
                    className="sidebar-links"
                    onClick={toggleNavbar}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
export default Sidebar
