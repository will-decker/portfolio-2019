import React from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="contact-text">
        <h1>Contact Me</h1>
        <h3>
          I'd love to hear from you! I'm currently available for freelance
          projects and also interested in full-time positions.
        </h3>
        <h3>Here's how you can reach me</h3>
      </div>
      <div className="contact-info">
        <div className="email">
          <FaEnvelope />
          <h3>Email</h3>
          <p>willdecker@gmail.com</p>
        </div>
        <div className="phone">
          <FaPhone />
          <h3>Phone</h3>
          <p>401-749-2073</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
