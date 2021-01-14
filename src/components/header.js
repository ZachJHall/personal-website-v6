import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const HeaderDiv = styled.div`
    height: 70px;
    background-color: white;
    display: flex;

    @media (max-width:332px) {
        justify-content: space-around;
    }
` 
const LeftDiv = styled.div`
    width: 33%;
    height:100%;

    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:332px) {
        display: none;
    }
`
const MiddleDiv = styled.div`
    width: 34%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media (max-width:332px) {
        width: auto;
    }
`

const HeaderText = styled.h1`
    color:#008fc6;
    margin:0;
    padding:0;
  
    &:hover {
        color: red;
    }

`
const RightDiv = styled(LeftDiv)`
    @media (max-width:332px) {
        display: flex;
        width: auto;

    }
`
const Header = () =>(
    <HeaderDiv>
        <LeftDiv>
            <Link to="/"><HeaderText>Home</HeaderText></Link>
        </LeftDiv>

        <MiddleDiv>
            <Link to="/"><HeaderText>Zach Hall</HeaderText></Link>
        </MiddleDiv>

        <RightDiv>
            <Link to="/blog"><HeaderText>Blog</HeaderText></Link>
        </RightDiv>
     
    </HeaderDiv>
)

export default Header