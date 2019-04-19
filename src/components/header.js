import { Link } from "gatsby"
import React from "react"
import Headroom from "react-headroom"
import logo from "../images/wd_logo.svg"

class Header extends React.Component {

  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#work">Work</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </Headroom>
    );
  }
} 

export default Header
