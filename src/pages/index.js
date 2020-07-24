import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Jumchelin" />
    <Container>
      <h1>Jumchelin</h1>
      <p>오늘 점심 뭐먹지?</p>
      <form>
        <TextField
          label="식당 검색"
          variant="outlined"
          onChange={e => {
            console.log(">>> e", e.target.value)
          }}
        />
      </form>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/searchPlace">Search Place</Link>
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Container>
  </Layout>
)

export default IndexPage
