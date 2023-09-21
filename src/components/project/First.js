import styled from "styled-components";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: black;
display:flex;
justify-content: center;
align-items:center;
`
const Img = styled.image`
width:800px;
height:600px;
background-color:gray;
`
//Img에는 협곡 지도
//지도 위에 캐릭터, 캐릭터 hover 시 약간 통통 튀게
//click 시 modal 기능으로 확대->인물소개
export function First () {
    return<>
    <Container>
        <Img></Img>
    </Container>
    </>
}