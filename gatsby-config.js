

module.exports = {
  siteMetadata: {
    title: `Vimbible`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["SANITY_TOKEN"]
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `gst2gsji`,
        dataset: `production`,
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
