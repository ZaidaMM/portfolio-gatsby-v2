import React from "react"
import socialLinks from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links social-links">
        {socialLinks.map(link => {
          return (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          )
        })}
      </div>
      <h5>
        &copy; {new Date().getFullYear()} | <span>Zaida Montano</span>| All
        Rights Reserved
      </h5>
    </footer>
  )
}
export default Footer
