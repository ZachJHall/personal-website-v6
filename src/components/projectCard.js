import React from "react"
import styled from 'styled-components'


const CardDiv = styled.div`
    margin: 20px 0 20px 0;
    padding: 0;

    height: 40vh;
    width: 40vh;

    min-height: 250px;
    max-height: 450px;

    background-color: white;

    background-size: cover;
    background-position:center;
    
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
`

const ContentDiv = styled.div`
    height: 100%;
    background-color: rgba(0,143, 198, 0);

    &:hover {
        background-color: rgba(0,143, 198, 0.7);

    }


`

const CardTop = styled.div`
        height: 75%;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;
`

const CardTitle = styled.h4`
        margin: 0;
        color:white;
        font-size: 25px;
        display: none;

        
        ${ContentDiv}:hover & {
            display: block;
        }
`

const CardBio = styled(CardTitle)`
        font-size: 20px;
        
`

const CardBottom = styled.div`
        height: 25%;

        display: flex;
        align-items: center;
        justify-content: space-around;
       
`

const CardLink = styled.a`
        color: white;
        font-size: 20px;
        display: none;
        ${ContentDiv}:hover & {
            display: block;
        }
`


const ProjectCard = (props) => (
    <CardDiv style = {{ backgroundImage: `url(${props.backgroundImg})`}}>
        <ContentDiv>
            <CardTop>
                <CardTitle>{props.title}</CardTitle>
                <CardBio>{props.bio}</CardBio>
            </CardTop>

            <CardBottom>
                <CardLink href = {props.gitU}>Github</CardLink>
                <CardLink href = {props.liveU}>Live</CardLink>
            </CardBottom>
        </ContentDiv>
    </CardDiv>
)

export default ProjectCard