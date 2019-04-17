import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainContent from "../components/main_content"

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
    <MainContent />
  </Layout>
)

export default IndexPage
