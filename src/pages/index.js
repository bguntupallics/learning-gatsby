import * as React from "react"
import Layout from "../components/Layout"
import '../styles/global.css'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div>
          <h1>Home</h1>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
