import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import MenuOverlay from "../components/MenuOverlay/menuOverlay"

import Header from "./header"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

let ftrStyles = {
  position: "relative",
  backgroundColor: "#3e92a3",
  height: "80px",
}

let pStyles = {
  textAlign: "center",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOverlayOpen: false,
    }
    this.overlayToggleClickHandler = this.overlayToggleClickHandler.bind(this)
  }

  overlayToggleClickHandler = () => {
    this.setState(prevState => ({
      menuOverlayOpen: !prevState.menuOverlayOpen,
    }))
  }

  overlayCloseClickHandler = () => {
    this.setState({ menuOverlayOpen: false })
  }

  render() {
    const { children } = this.props
    // let menuOverlay

    // if (this.state.menuOverlayOpen) {
    //   menuOverlay = <MenuOverlay click={this.overlayCloseClickHandler} />
    // }
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <MenuOverlay
              click={this.overlayCloseClickHandler}
              show={this.state.menuOverlayOpen}
            />
            <Header
              siteTitle={data.site.siteMetadata.title}
              overlayClickHandler={this.overlayToggleClickHandler}
            />
            <main style={{ height: "100%" }}>{children}</main>
            <footer style={ftrStyles}>
              <p style={pStyles}>
                © {new Date().getFullYear()}, Designed & Coded by Will Decker
              </p>
            </footer>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
