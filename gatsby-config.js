module.exports = {
  siteMetadata: {
    title: `The Running Coder`,
    description: `Personal portfolio and blog to showcase my awesome projects and talk about code.`,
    author: `@runningCoder81`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Monoton:400', 'Press Start 2P']
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://sapphireapi.com/therunningcoder/graphql`
        // refetchInterval: 60
      }
    }
    // {
    //   resolve: 'gatsby-wpgraphql-inline-images',
    //   options: {
    //     wordPressUrl: 'https://sapphireapi.com/therunningcoder/',
    //     uploadsUrl:
    //       'https://sapphireapi.com/therunningcoder/wp-content/uploads/',
    //     processPostTypes: ['Page', 'Post', 'my_projects'],
    //     graphqlTypeName: 'WPGraphQL',
    //     generateWebp: true
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
