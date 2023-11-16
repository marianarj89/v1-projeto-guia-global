/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Guia Global Projeto JAMstack`,
    siteUrl: `https://enchanting-meringue-fc1083.netlify.app/`,
    description: `© 2023 Guia Global | Projeto de JAMstack & GatsbyJS | Infnet Pós Graduacão Fullstack | Aluna: Mariana Sá Ribas`,
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: ["https://jsonplaceholder.typicode.com/posts"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
