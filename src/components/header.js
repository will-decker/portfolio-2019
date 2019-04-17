import { Link } from "gatsby"
import React from "react"
import logo from "../images/wd_logo.svg"

const Header = () => (
  <header className="nav-header">
    <nav className="navbar">
      <div className="nav-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="spacer" />
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
