import React from "react"
import styled from 'styled-components'
import './index.css'

import { useStaticQuery, graphql } from "gatsby"

import Header from '../components/header'

const Container = styled.div`

`

export default function Home() {

  const query = useStaticQuery(graphql`
 query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
      }
    }
  }
}
`)
  return (
    <Container>
      <Header />

      {query.allMarkdownRemark.edges.map(edge => {
        return (
          <h1>{edge.node.frontmatter.title}</h1>
        )
      })}
      
    </Container>
  )
}


