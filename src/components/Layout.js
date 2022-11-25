import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleNavbar={toggleNavbar} />
      <Sidebar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      {children}
      <Footer />
    </>
  )
}
export default Layout
