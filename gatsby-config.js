/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Juke's Kitchen`,
        short_name: `Juke's Kitchen`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#294C89`,
        display: `standalone`,
        icon: `assets/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        legacy: false
      },
    },
    `gatsby-plugin-offline`
  ],
  pathPrefix: "/recipease",
}
