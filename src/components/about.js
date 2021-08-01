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
          I'm Will Decker, a web developer who loves creating interesting
          visuals and interactions. Code, animation, 3D and video are all tools
          at my disposal to achieve this.
          <br />
          <br />
          With a background in motion graphics and visual effects, I like to
          incorporate this experience into my web development work. I believe it
          helps give me a unique perspective into creating website that are more
          of an experience.
          <br />
          <br />
          Currently, in my free time, I am focusing on full-stack web
          development with React and Node and incorporating 3D into websites
          with WebGL.
        </p>
      </div>
    </div>
  </section>
)

export default About
