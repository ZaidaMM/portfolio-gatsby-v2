import React from "react"
import { Link } from "gatsby"

const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Page not Found</h3>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </>
  )
}
export default ErrorPage
