import React from "react"
import avatar from "../images/WD_Avatar.svg"

const Intro = () => (
  <section id="intro">
    <div className="intro-container">
      <div className="intro-text">
        <h1>Will Decker</h1>
        <h2>Front-End Developer & Web Designer</h2>
      </div>
      <div className="intro-avatar">
        <img src={avatar} alt="Will Decker Avatar" />
      </div>
    </div>
  </section>
  
)

export default Intro
