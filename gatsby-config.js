/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juke's Kitchen`,
        short_name: `Juke's Kitchen`,
        start_url: `/`,
        background_color: `#294C89`,
        theme_color: `#294C89`,
        display: `standalone`,
        icon: `assets/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`
  ],
  pathPrefix: "/jukes-kitchen",
}
