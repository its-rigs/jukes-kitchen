module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\:300,400,600`,
        ],
        display: 'swap'
      }
    },
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
