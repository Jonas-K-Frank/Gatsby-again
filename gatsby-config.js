/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,

		{
			resolve:`gatsby-plugin-sharp`,
			options: {
				defaults: {
				  formats: [`auto`, `webp`],
				  placeholder: `dominantColor`,
				  quality: 50,
				  breakpoints: [750, 1080, 1366, 1920],
				  backgroundColor: `transparent`,
				  tracedSVGOptions: {},
				  blurredOptions: {},
				  jpgOptions: {},
				  pngOptions: {},
				  webpOptions: {},
				  avifOptions: {},
				}
			  }
		},
		  {
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `projects`,
			  path: `${__dirname}/src/projects/`,
			},
		  },
		  {
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `images`,
			  path: `${__dirname}/src/images/`,
			},
		  },
		  {
			resolve: `gatsby-transformer-remark`,
			options: {},
		  },
	],
	siteMetadata: {
		title: "Web Warrior",
		description: "A page about warriors on the web",
		copyright: "This site is copyrighed",
		email: "me@somedomaine.com"
	},
};
