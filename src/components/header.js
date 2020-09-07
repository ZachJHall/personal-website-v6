import React from "react"
import styled from 'styled-components'

const HeaderDiv = styled.div`
    height: 70px;
    background-color: white;
    display: flex;
` 
const LeftDiv = styled.div`
    width: 33%;
    height:100%;
`
const MiddleDiv = styled.div`
    width: 34%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const HeaderText = styled.h1`
    color:#008fc6;
    margin:0;
    padding:0;
  

`
const RightDiv = styled(LeftDiv)`
    
`
const Header = () =>(
    <HeaderDiv>
        <LeftDiv />
        <MiddleDiv>
            <HeaderText>Zach Hall</HeaderText>
        </MiddleDiv>
        <RightDiv />
    </HeaderDiv>
)

export default Header