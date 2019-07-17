import React from "react"
import avatar from "../svgs/WD_Avatar.svg"

const Intro = () => (
  <section id="intro">
    <div className="intro-container">
      <div className="intro-text">
        <h1>Will Decker</h1>
        <h2>Front-End Developer</h2>
        {""}
        <h2>& Web Designer</h2>
      </div>
      <div className="intro-avatar">
        <img src={avatar} alt="Will Decker Avatar" />
      </div>
    </div>
  </section>
)

export default Intro
