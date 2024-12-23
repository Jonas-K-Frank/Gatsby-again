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
		  {
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `projects`,
			  path: `${__dirname}/src/projects/`,
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
	},
};
