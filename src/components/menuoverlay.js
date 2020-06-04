import React from "react"
import { Link } from "gatsby"

import { IoIosClose } from "react-icons/io"
import "./css/menuoverlay.scss"

const MenuOverlay = props => {
  let overlayClasses = "menu-overlay"
  if (props.show) {
    overlayClasses = "menu-overlay open"
  }
  return (
    <nav className={overlayClasses}>
      <IoIosClose onClick={props.click} />
      <ul>
        <li onClick={props.click}>
          <Link to="/#about">About</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/#work">Work</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuOverlay
