import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                subtitle
                date
              }
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Blog" />

      <div className="blog-header">
        <h1>Blog</h1>
      </div>
      <div className="posts-container">
        <ul>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li>
                <p>{post.node.frontmatter.date}</p>
                <h2>{post.node.frontmatter.title}</h2>
                <h3>{post.node.frontmatter.subtitle}</h3>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogPage
