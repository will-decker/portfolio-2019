import React from "react"
import Project from "./project"

import { FaArrowAltCircleRight } from "react-icons/fa"

const Work = ({ projects }) => (
  <section id="work">
    <div className="work-container">
      <h1>Work</h1>
      <div className="projects">
        {projects.map(project => (
          <Project
            key={project.node.frontmatter.title}
            project={project.node}
          />
        ))}
        {/* <div className="more-work">
          <p>
            Check out my motion design and animation work{" "}
            <a
              href="http://willdecker.myportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cta-arrow">
                here <FaArrowAltCircleRight />
              </span>
            </a>
          </p>
        </div> */}
      </div>
    </div>
  </section>
)

export default Work
