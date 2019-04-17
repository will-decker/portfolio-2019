import React from "react"
import avatar from "../images/WD_Avatar.svg"
import coder from "../images/desk_coder.svg"

const MainContent = () => (
  <main>
    <section className="intro">
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

    <section id="about">
      <div className="about-container">
        <div className="coder-img">
          <img src={coder} alt="Coder Illustration" />
        </div>
        <div className="profile">
          <h1>About</h1>
          <p>
            Hi, I’m Will Decker, a designer, developer and animator based in New
            Jersey. I have over a decade of experience freelancing as a motion
            designer in New York City. Recently, I expanded my skillset to
            include web design and development. I love learning new things,
            problem solving and creating.
          </p>
        </div>
      </div>
    </section>
    <section className="skills" />
    <section id="work" />
    <section id="contact" />
  </main>
)

export default MainContent
