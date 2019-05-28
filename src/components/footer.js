import React from "react"
import { FaGithubSquare, FaLinkedin, FaCodepen } from "react-icons/fa"

const Footer = () => (
  <footer>
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/williamdecker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/will-decker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://codepen.io/willdecker/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen />
      </a>
    </div>
    <p>© {new Date().getFullYear()}, Designed & Coded by Will Decker</p>
  </footer>
)

export default Footer
