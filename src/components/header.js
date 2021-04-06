import { Link } from "gatsby"
import React, { Component } from "react"
import Headroom from "react-headroom"
import DrawerToggleButton from "./drawertogglebutton"
import logo from "../svgs/wd_logo.svg"

class Header extends Component {
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="spacer" />
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/#intro">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#work">Work</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <DrawerToggleButton click={this.props.overlayClickHandler} />
          </div>
        </nav>
      </Headroom>
    )
  }
}

export default Header
