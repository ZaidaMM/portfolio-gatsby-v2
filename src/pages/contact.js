import React from "react"
import Seo from "../components/Seo"

const Contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <main className="contact-page">
        <form className="contact-form">
          <h3>Get in Touch</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="form-control"
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              className="form-control"
            />
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="message"
              className="form-control"
            ></textarea>
          </div>
          <button className="btn submit-btn ">submit</button>
        </form>
      </main>
    </>
  )
}
export default Contact
