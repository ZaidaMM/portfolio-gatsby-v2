import React from "react"
import ContactForm from "../components/ContactForm"
import Seo from "../components/Seo"

const Contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <ContactForm />
      </section>
    </>
  )
}
export default Contact
