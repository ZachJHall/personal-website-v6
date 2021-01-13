import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    background: blue;
    height: 20vh;
    color: white;

    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;
`
const BlogAttention = () =>(
   <Container>
       <span >A little of what I have wrote:</span>
       <span>Here</span>
   </Container>
)

export default BlogAttention