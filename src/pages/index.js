import React from "react"
import styled from 'styled-components'
import './index.css'

import Header from '../components/header'
import Hero from '../components/hero'
import ProjectCard from '../components/projectCard'

const ContainerDiv = styled.div`
    
`

export default function Home() {
  return (
    <ContainerDiv>
      <Header />
      <Hero />
      <ProjectCard />
    </ContainerDiv>
  )
}
