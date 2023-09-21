import styled from "styled-components"
import logo from "./img/Logo-removebg-preview.png"
import  {First}  from "./First"
import { Router, Route } from "react-router-dom"


const Container = styled.div`
width: 100vw;
height: 100vh;
background-color:black;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
const Img = styled.img`
width: 600px;
`

//메인 화면을 클릭하면 /First로 넘어가게 연결
export function Zero(){
    return<>
    <Container>
        <Img src={logo}/>
    </Container>
    </>
}