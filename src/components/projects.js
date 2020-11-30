import React from "react"
import styled from 'styled-components'

import ProjectCard from './projectCard'

import img1 from '../media/site-background.jpg'
import ChihuahuaRescue from '../media/chihuahuaRescueMidwestImage.png'
import Paint from '../media/digital-paint-board.png'
import Fitness from '../media/usafitness.png'
import SpinAFriend from '../media/spinAFriend.png'

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
            backgroundImg = {ChihuahuaRescue}
            title = "Chihuahua Rescue Midwest" 
            bio = "Built for a St. Louis Charity"
            gitU = "https://github.com/ZachJHall/Rescue-Midwest"
            liveU = "https://www.chihuahuarescuemidwest.org/"
            />

            <ProjectCard 
            backgroundImg = {Fitness}
            title="Gym Website" 
            bio="A general gym website design"
            gitU="https://github.com/ZachJHall/powerbodyusa-website"
            liveU="https://test.zachhall.me/"
            />
            
            <ProjectCard 
            backgroundImg = {Paint}
            title="Digital Paint Board" 
            bio="I wanted to mess with the canvas tag"
            gitU="https://github.com/ZachJHall/digital-paint-board"
            liveU="https://zachjhall.github.io/digital-paint-board/"
            />

            <ProjectCard 
            backgroundImg = {SpinAFriend}
            title="Spin A Friend" 
            bio="Building useless stuff can be fun"
            gitU="https://github.com/ZachJHall/spin-a-friend"
            liveU="https://spinafriend.com/"
            />

            

        </ProjectContainer>
    </ProjectDiv>
)

export default Projects