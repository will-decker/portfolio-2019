const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve("./src/templates/project-post.js")

  const projects = res.data.allMdx.edges

  projects.forEach(({ node }, index) => {
    createPage({
      component: projectTemplate,
      path: node.frontmatter.slug,
      context: { id: node.id },
    })
  })
}
