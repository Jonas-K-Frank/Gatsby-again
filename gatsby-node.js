const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.nodes.forEach((node) => {
        createPage({
            path: "/projects/" + node.frontmatter.slug,
            component: path.resolve("./src/templates/project-details.js"),
            context: { slug: node.frontmatter.slug },
        });
    });
};
