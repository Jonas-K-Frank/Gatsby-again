import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image" 

export default function Home({ data }) {
  console.log(data)

 

  return <Layout>
    <section className={styles.header}>
   
    <div>
      <h2>Developer</h2>
      <h3>UX and web designer</h3>
      <p>Based in Ruds Vedby</p>
      <Link className={styles.btn} to="/projects">This is a button</Link>
    </div>
    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
   
  </section>
  </Layout>
}

export const query = graphql`

    query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
        layout: FIXED
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        
        )
      }
    }
  }
`