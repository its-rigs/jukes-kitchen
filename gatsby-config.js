module.exports = {
  siteMetadata: {
    title: `Juke's Kitchen`,
    description: `Some recipes we like to cook`,
    author: 'Juke',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:300,400,600`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recipes`,
        path: `${__dirname}/content/recipes/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juke's Kitchen`,
        short_name: `Juke's Kitchen`,
        start_url: `/`,
        background_color: `#3a76df`,
        theme_color: `#3a76df`,
        display: `standalone`,
        icon: `${__dirname}/content/assets/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
  pathPrefix: '/jukes-kitchen',
}
