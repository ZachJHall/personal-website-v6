import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Header from '../components/header'

const Title = styled.h1`
    text-align: center;
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`
const Body = styled.div`
   text-align: left;
   max-width: 500px;
   width: 90%;
   line-height: 2rem;
`
export default function BlogPost({ data }) {
    const post = data.markdownRemark
  return (
    <div>
        <Header />
        <Title>{post.frontmatter.title}</Title>
        <BodyContainer>
            <Body dangerouslySetInnerHTML={{ __html: post.html }} />
        </BodyContainer>
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