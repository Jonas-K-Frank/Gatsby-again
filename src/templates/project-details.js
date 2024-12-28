import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/project-details.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProjectDetails({ data }) {
	const { html } = data.markdownRemark;
	const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

	return (
		<Layout>
			<div className={styles.details}>
				<h2>{title}</h2>
				<h3>{stack}</h3>
				<div className={styles.featured}>
					<GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt={title}/>
				</div>
				<div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query MyQuery($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				stack
				featuredImg {
        childImageSharp {
          gatsbyImageData(
          layout: CONSTRAINED,
          placeholder: BLURRED,
          formats: [AUTO, WEBP]
          )
        }
				}
			}
		}
	}
`;
