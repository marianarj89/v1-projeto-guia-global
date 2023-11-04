/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: ["https://jsonplaceholder.typicode.com/posts"]
      }},
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
    `gatsby-transformer-remark`,
  ],
};
