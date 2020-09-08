import React from "react"
import styled from 'styled-components'

import ProjectCard from './projectCard'

import img1 from '../media/site-background.jpg'

const ProjectDiv = styled.div`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: space-around;
    background-color: white;



` 

const IntroDiv=styled.div`
    height:auto;
    display: flex;

    justify-content:center;
    align-items: center;
`

const IntroText = styled.h2`
    font-size: 45px;
    margin: 10px 0 10px 0;
`
const ProjectContainer = styled.div`
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;

    justify-content: space-around;
    background-color: white;

    flex-wrap: wrap;

`
const Projects = () =>(
    <ProjectDiv>
        <IntroDiv>
            <IntroText>Projects</IntroText>
        </IntroDiv>
        <ProjectContainer>
            <ProjectCard 
            backgroundImg = {img1}
            title = "Chihuahua Rescue Midwest" 
            bio = "Built for a St. Louis Charity"
            gitU = "https://github.com/ZachJHall/Rescue-Midwest"
            liveU = "https://www.chihuahuarescuemidwest.org/"
            />
            <ProjectCard 
            backgroundImg = {img1}
            title="Digital Paint Board" 
            bio="I wanted to mess with the canvas tag"
            gitU="https://github.com/ZachJHall/digital-paint-board"
            liveU="https://zachjhall.github.io/digital-paint-board/"
            />
        </ProjectContainer>
    </ProjectDiv>
)

export default Projects