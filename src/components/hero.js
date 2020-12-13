import React from "react"
import styled from 'styled-components'

import BackgroundImage from '../media/site-background.jpg'
import Resume from '../media/Zach-Hall-Resume-O.pdf'

const HeroDiv = styled.div`
    height: 50vh;
    background-color: blue;

    min-height: 380px;
    max-height: 450px;

    // background-image: url(${BackgroundImage});
    // background-size: cover;
    // background-position:center;
   
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

const UpperDiv = styled.div`
    height:80%;
    display:flex;
    flex-direction: column;
`
const ContactDiv = styled.div`
    height: 20%;

    display: flex;

    justify-content: space-around;
    
`

const ContactLink = styled.a`
    font-size: 20px;
    color:#FFFFFF;
    margin:0;
`

const HeroImageDiv = styled.div`
    height: 100%;
    width: 100%;
`
const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    // background-size: cover;
    // background-position:center;
`
const Hero = () =>(
    <HeroDiv>
        <HeroImageDiv>
            <HeroImage src={BackgroundImage}  />
        </HeroImageDiv>
        
        <ContentDiv>
            
            
            {/* <CenterDiv>
                <UpperDiv>
                    <CenterText>Hey, I'm Zach</CenterText>
                    <CenterTextSub>Software Dev, St. Louis</CenterTextSub>
                </UpperDiv>

                <ContactDiv>
                    <ContactLink href="https://linkedin.com/in/zachhall-cs" >Linkedin</ContactLink>
                    <ContactLink href="https://github.com/ZachJHall">Github</ContactLink>
                    <ContactLink href="mailto:zachjohnhall+personalwebsite@gmail.com">Email</ContactLink>
                    <ContactLink href={Resume}>Resume</ContactLink>

                </ContactDiv>

            </CenterDiv> */}

        </ContentDiv>
    </HeroDiv>
)

export default Hero