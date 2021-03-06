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
          I’m Will Decker, a designer, developer and animator based in New
          Jersey. I have over a decade of experience freelancing as a motion
          designer in New York City. Recently, I expanded my skillset to include
          web design and development. I love to learn new skills or techniques
          that inspire me to create cool things.
        </p>
      </div>
    </div>
  </section>
)

export default About
