import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Link, NavLink } from "react-router-dom";

const Container = styled.div`
width: 100px;
height: 100vh;
background-color: #eee;
font-size: 1.5rem;
padding: 50px 10px;
`
const Li = styled.li`
list-style: none;
`

const StyledLink = styled(Link)`
text-decoration: none;
`

//원래는 부모가 가지고 있는 page를 자식인 navbar에게 호출을 setPage(컴포넌트) 방식으로 위임 > 절대 문자 아님 컴포넌트임
export function Navbar({setPage}){
    return<>
    <Container>
        <ul>
            <Li>
                {/*to속성에는 route에서 선언한 url 주소를 적어 준다*/}
            <StyledLink to={"/"}>Home</StyledLink>
            </Li>

            <Li>
            <StyledLink to={"/contact"}>Contact</StyledLink>
            </Li>

            <Li>
            <StyledLink to={"/about"}>About</StyledLink>
            </Li>
        </ul>
    </Container>
    </>
}