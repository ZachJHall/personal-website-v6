import React from "react"
import styled from 'styled-components'

import BackgroundImage from '../media/site-background.jpg'

const HeroDiv = styled.div`
    height: 50vh;
    background-color: blue;

    min-height: 380px;
    max-height: 450px;

    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position:center;
   
` 

const ContentDiv = styled.div`
    height: 100%;
    background-color: rgba(0,143, 198, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

`

const CenterDiv = styled.div`
    height: 200px;
    width: 400px;

    display: flex;
    flex-direction: column;

    background-color: rgba(143, 0,0, 0.6);

    
`

const CenterText = styled.h2`
        color: white;
        align-self: center;
        margin:0;

        font-size: 45px;
`

const CenterTextSub = styled.h3`
        margin: 0;
        color: white;
        align-self: center;
        font-size: 20px;
`

const Hero = () =>(
    <HeroDiv>
        <ContentDiv>
            <CenterDiv>
                <CenterText>Hey, I'm Zach</CenterText>
                <CenterTextSub>Software Dev, St. Louis</CenterTextSub>
            </CenterDiv>
        </ContentDiv>
    </HeroDiv>
)

export default Hero