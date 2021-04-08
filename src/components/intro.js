import React from "react"
import { Link } from "gatsby"

const Intro = () => (
  <>
    <section id="intro">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Will Decker</h1>
          <h2>Web Developer</h2>
          <Link to="/#work">
            <div className="cta-btn">View My Work</div>
          </Link>
        </div>
      </div>
    </section>
  </>
)

export default Intro
