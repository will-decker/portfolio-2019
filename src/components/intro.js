import React from "react"
import avatar from "../svgs/WD_Avatar.svg"

const Intro = () => (
  <>
    <section id="blm-message">
      <div className="message-container">
        <h1>Black Lives Matter</h1>
        <p>Support the movement against racism and police brutality.</p>
        <a href="#" className="donate-btn">
          Donate
        </a>
      </div>
      <div className="scrolldown-msg">
        Scroll down to continue to willdecker.com
      </div>
    </section>
    <section id="intro">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Will Decker</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="intro-avatar">
          <img src={avatar} alt="Will Decker Avatar" />
        </div>
      </div>
    </section>
  </>
)

export default Intro
