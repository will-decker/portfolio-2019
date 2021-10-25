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
          design, animation, 3D, and video. I've recently been having fun
          working with 3D on the web using Three.js and some WebGL.
          <br />
          <br />
          Coming from a background in motion graphics and visual effects, I like
          to incorporate this experience into my web development work. I believe
          it gives me a unique perspective that allows me to create websites
          that are more immersive.
          <br />
          <br />
          Currently, I am focusing on learning advanced full-stack web
          development with React and Node.js.
          <br />
          <br />
        </p>
      </div>
    </div>
  </section>
)

export default About
