module.exports = {
  siteMetadata: {
    siteUrl: "https://www.minmaungmaung.com",
    title: "Min Maung Maung - Fullstack Developer",
    description: `Portfolio Website of Min Maung Maung`,
  },
  plugins: [
      {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
              trackingIds: [
                  "G-F18GKG4P4H",
              ],
              pluginConfig: {
                  head: false,
              },
          },
      },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-fontawesome-css",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'Min Maung Maung - Fullstack Developer',
              short_name: 'Min Maung Maung',
              start_url: '/',
              icon: 'src/images/icon.png',
          },
      },
  ],
};
