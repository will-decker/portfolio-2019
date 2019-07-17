module.exports = {
  siteMetadata: {
    title: `Will Decker - Developer & Designer`,
    description: `A portfolio portfolio site for Will Decker, a Front-End Developer and Web Designer.`,
    author: `Will Decker`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Will Decker Developer Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#3e92a3`,
        theme_color: `#3e92a3`,
        display: `minimal-ui`,
        icon: `src/images/WD_Icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-react-svg`,
    //   options: {
    //     rule: {
    //       include: /svgs/,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
