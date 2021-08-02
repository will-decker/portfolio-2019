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
          visuals and interactions. In order to accomplish this, I use code,
          design, animation, 3D, and video.
          <br />
          <br />
          With a background in motion graphics and visual effects, I like to
          incorporate this experience into my web development work. I believe it
          gives me a unique perspective that allows me to create websites that
          are more of an experience.
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
