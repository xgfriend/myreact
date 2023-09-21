import styled from "styled-components";

const Container = styled.div`
display: flex;
`

const NavLink = styled.div`
width:100%;
height: 30px;
color: gray;
background-color: black;
`

export function NavBar(){
    return<>
    <Container>
        <NavLink to="/first">첫</NavLink>
        <NavLink to="/second">둘</NavLink>
        <NavLink to="/third">셋</NavLink>
        <NavLink to="/fourth">넷</NavLink>
    </Container>
    </>
}