import React from "react"
import styled from 'styled-components'
import './index.css'


import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/projects'


const ContainerDiv = styled.div`

`

export default function Home() {
  return (
    <ContainerDiv>
      <Header />
      <Hero />
      <Projects />
    </ContainerDiv>
  )
}
