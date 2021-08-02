import { Link } from "gatsby"
import React, { Component } from "react"
import Headroom from "react-headroom"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import DrawerToggleButton from "./drawertogglebutton"
import logo from "../svgs/wd_logo.svg"

class Header extends Component {
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <nav className="navbar">
          {/* <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div> */}
          <div className="spacer" />
          <div className="navbar-menu">
            <ul>
              <li>
                <AnchorLink to="/#intro" title="HOME" />
              </li>
              <li>
                <AnchorLink to="/#about" title="ABOUT" />
              </li>
              <li>
                <AnchorLink to="/#work" title="WORK" />
              </li>
              <li>
                <AnchorLink to="/#contact" title="CONTACT" />
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
