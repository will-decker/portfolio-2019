import React from "react"
import { FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="contact-text">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-form">
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" id="name" required />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="email" required />
            <label>Email</label>
          </div>
          <div className="form-group">
            <input type="text" name="subject" id="subject" required />
            <label>Subject</label>
          </div>
          <div className="form-group">
            <textarea name="message" id="message" rows="5" required />
            <label>Message</label>
          </div>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </div>
  </section>
)

export default Contact
