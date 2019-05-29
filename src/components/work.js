import React from "react"
import Project from "./work/Project"

import { FaArrowAltCircleRight } from "react-icons/fa"

const Work = ({ projects }) => (
  <section id="work">
    <div className="work-container">
      <h1>Work</h1>
      <p className="lead">
        A selection of my web design and development projects
      </p>
      <div className="projects">
        {projects.map(project => (
          <Project key={project.node.title} project={project.node} />
        ))}
      </div>
      <p className="lead">
        You can also find my motion design and animation work{" "}
        <a
          href="http://willdecker.myportfolio.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here <FaArrowAltCircleRight />
        </a>
      </p>
    </div>
  </section>
)

export default Work
