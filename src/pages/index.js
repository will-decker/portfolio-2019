import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"


import "../components/css/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `web developer`,
        `developer`,
        `front-end developer`,
        `front-end`,
        `design`,
        `web designer`,
        `web design`,
        `website design`,
        `website builder`,
        `responsive web design`,
        `wordpress`,
        `wordpress developer`,
        `wordpress designer`,
      ]}
    />
    <Intro />
    <About />
    <Skills />
    <Work />
  </Layout>
)

export default IndexPage
