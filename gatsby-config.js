module.exports = {
  pathPrefix: `/freestyle-tubes`,
  siteMetadata: {
    siteTitle: `FreeStyle YouTube ライブラリ`,
    defaultTitle: `FreeStyle YouTube ライブラリ`,
    siteTitleShort: `FreeStyle YouTube ライブラリ`,
    siteDescription: `FreeStyle で公開している動画ライブラリ保管庫`,
    siteUrl: `https://fs5013-furi-sutao.github.io/freestyle-tubes/`,
    siteAuthor: `@hashimoto`,
    siteImage: `/banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://fs5013-furi-sutao.github.io/freestyle-tubes`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/freestyle-tubes/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
