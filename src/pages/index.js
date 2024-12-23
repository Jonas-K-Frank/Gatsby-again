import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { graphql, Link } from "gatsby"
 

export default function Home({ data }) {
  console.log(data)

  const {title, description} = data.site.siteMetadata
  return <Layout>
    <section className={styles.header}>
   
    <div>
      <h2>Developer</h2>
      <h3>UX and web designer</h3>
      <p>Based in Ruds Vedby</p>
      <Link className={styles.btn} to="/projects">This is a button</Link>
    </div>
    <img src="/banner.png" alt="Site banner" style={{ maxWidth: '100%' }}/>
    <p>{title} - {description}</p>
  </section>
  </Layout>
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}
`