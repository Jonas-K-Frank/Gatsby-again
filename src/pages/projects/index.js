import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/project.module.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects({ data }) {
	console.log(data);
	const projects = data.projects.nodes;
	const contact = data.contact.siteMetadata.contact;
	
	return (
		<Layout>
			<div className={styles.portfolio}>
				<h2>Portfolio</h2>
				<h3>Projects & Websites I've Created</h3>
				<div className={styles.projects}>
					{projects.map((projects) => (
						<Link
							to={"/projects/" + projects.frontmatter.slug}
							key={projects.id}
						>
							<div>
              <GatsbyImage image={getImage(projects.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={projects.frontmatter.title}/>
             
								<h3>{projects.frontmatter.title}</h3>
								<p>{projects.frontmatter.stack}</p>
							</div>
						</Link>
					))}
				</div>
				<p>Hvis du vil skrive til mig kan du gøre det på {contact}</p>
			</div>
		</Layout>
	);
}

export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
        childImageSharp {
          gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED,
          formats: [AUTO, WEBP]
          )
        }
          }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`
