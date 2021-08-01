import React from "react"
import coder from "../svgs/desk_coder.svg"

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="coder-img">
        <img src={coder} alt="Coder Illustration" />
      </div>
      <div className="profile">
        <h1>Hi,</h1>
        <p>
          I'm Will Decker, a web developer who likes to focus on the visual and
          creative side of web development.
          <br />
          <br />
          My background is in motion graphics and visual effects and I like to
          incorporate these skills into my work in front-end development.
          <br />
          <br />
          Currently, I am focusing on full-stack web development with Node and
          incorporating 3D into websites with WebGL.
        </p>
      </div>
    </div>
  </section>
)

export default About
