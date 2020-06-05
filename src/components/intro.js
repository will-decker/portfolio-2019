import React from "react"
import avatar from "../svgs/WD_Avatar.svg"

const Intro = () => (
  <>
    <section id="blm-message">
      <div className="message-container">
        <h1>Black Lives Matter</h1>
        <p>
          Support the movement against racial inequality, social injustice and
          police brutality.
        </p>
        <div className="msg-btns">
          <a
            href="https://secure.actblue.com/donate/ab_mn?refcode=tweet"
            target="_blank"
            className="donate-btn"
          >
            Donate
          </a>
          <a
            href="https://blacklivesmatter.com/"
            target="_blank"
            className="donate-btn"
          >
            Learn More
          </a>
        </div>
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
