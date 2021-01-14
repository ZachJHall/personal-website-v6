import React from "react"
import { graphql } from "gatsby"

import Header from '../components/header'

export default function BlogPost({ data }) {
    const post = data.markdownRemark
  return (
    <div>
        <Header />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
  `