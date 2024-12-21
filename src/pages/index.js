import * as React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { Link } from "gatsby"
 

export default function Home() {
  return <Layout>
    <section className={styles.header}>
    
    <div>
      <h2>Developer</h2>
      <h3>UX and web designer</h3>
      <p>Based in Ruds Vedby</p>
      <Link className={styles.btn} to="/projects">This is a button</Link>
    </div>
    
  </section>
  </Layout>
}
