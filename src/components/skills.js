import React from 'react'

import GitHub from '../images/skills/github.svg'
import JavaScript from '../images/skills/javascript.svg'
import ReactJS from '../images/skills/react.svg'
import HTML5 from '../images/skills/html5.svg'
import CSS3 from '../images/skills/css3.svg'
import Sass from '../images/skills/sass.svg'
import Bootstrap from '../images/skills/bootstrap.svg'
import Photoshop from '../images/skills/photoshop.svg'
import Illustrator from '../images/skills/illustrator.svg'

const Skills = () => {
  const logos = [HTML5, CSS3, JavaScript, ReactJS, Sass, Bootstrap, GitHub, Photoshop, Illustrator];
  return (
    <section className="skills" data-aos="fade-right">
      <h2>Skills</h2>
      <div className="skills-flex-container">
        {logos.map((value, index) => {
          return <Skill key={index} skill={value} />
        })}
      </div>
    </section>
  )
}

const Skill = ({ skill }) => (
  <img
    className="skill-logo skill-transition"
    src={skill}
    alt=""
  />
)

export default Skills