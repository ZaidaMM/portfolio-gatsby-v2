import React from "react"
import { Link } from "gatsby"

const ErrorPage = () => {
  return (
    <main className="error-page">
      <div className="error-container">
        <h1>404</h1>
        <h3>Page not Found</h3>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
export default ErrorPage
