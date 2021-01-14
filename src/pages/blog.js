import React from "react"
import styled from 'styled-components'
import './index.css'

import { Link, graphql } from "gatsby"

import Header from '../components/header'

const Container = styled.div`

`

export default function Blog({ data }) {
  return (
    <Container>
      <Header />
      {/* <h3>{data.allMarkdownRemark.totalCount}</h3> */}

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to = {node.fields.slug}><h2>{node.frontmatter.title}</h2></Link>
      ))}

      
    </Container>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`