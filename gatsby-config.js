/** * Configure your Gatsby site with this file.  *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Nihit Bansal',
        description: 'Portfolio Website',
        author: 'Nihit Bansal',
        keywords: ['Portfolio', 'Developer', 'India', 'New Delhi', 'Nihit Bansal', 'nihitb06', 'Nihit', 'Projects', 'Engineer'],
        siteUrl: 'https://nihitb06.github.io'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            }
        },
        'gatsby-plugin-emotion',
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'avatar',
                path: `${__dirname}/src/avatar`,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,

            options: {
                name: "Nihit Bansal",
                short_name: "Nihit Bansal",

                start_url: "/",

                background_color: `#FFFFFF`,
                theme_color: `#6A097D`,

                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: "standalone",

                icon: "src/icons/icon.png", // This path is relative to the root of the site.

                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
}
