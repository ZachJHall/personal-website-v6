import React from "react"
import styled from 'styled-components'

import BackgroundImage from '../media/site-background.jpg'

const CardDiv = styled.div`
    margin: 0;
    padding: 0;
    height: 250px;
    width: 250px;
    background-color: white;

    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position:center;
    
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
`

const CardTitle = styled.h4`
        margin: 0;
        color:white;
        font-size: 30px;
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

const CardLinks = styled.a`
        color: white;
        font-size: 20px;
        display: none;
        ${ContentDiv}:hover & {
            display: block;
        }
`


const ProjectCard = () => (
    <CardDiv>
        <ContentDiv>
            <CardTop>
                <CardTitle>Title</CardTitle>
                <CardBio>A simple Description</CardBio>
            </CardTop>

            <CardBottom>
                <CardLinks>Github</CardLinks>
                <CardLinks>Live</CardLinks>
            </CardBottom>
        </ContentDiv>
    </CardDiv>
)

export default ProjectCard