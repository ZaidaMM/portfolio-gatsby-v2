import React from "react"

const ContactForm = () => {
  return (
    <article className="contact-form">
      <h3>Get in Touch</h3>
      <form action="https://formspree.io/f/xzbwqkgv" method="POST">
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="form-control"
          />
          <input
            type="email"
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
    </article>
  )
}
export default ContactForm
