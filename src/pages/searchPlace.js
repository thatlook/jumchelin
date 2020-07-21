import React, { useEffect } from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SearchPlace = () => {
  
  return (
  <Layout>
    <SEO title="Jumchelin" />
    <Container>
      <h1>Jumchelin</h1>
      <p>오늘 점심 뭐먹지?</p>
      <form>
      
      <TextField           
        label="Label"
        placeholder="Placeholder"
        helperText="Full width!" 
        variant="outlined" 
          
        />
    </form>

    </Container>
  </Layout>
)}

export default SearchPlace

