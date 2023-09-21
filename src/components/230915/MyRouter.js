import styled from "styled-components";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { About } from "./About";
import { useState } from "react";
import { Error } from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
display: grid;
margin: 0 auto;
grid-template-columns: 30% 70%;
width: 80%;
height: 100vh;
`

const Content = styled.div``

export function MyRouter(){
    const [page, setPage] = useState(About);
    return <>
    <BrowserRouter> {/*반드시 브라우저라우터로 모든 코드를 감싸 줘야 함*/}
    <Container>
    <Navbar setPage={setPage}/> {/*내가 부를 수 없으니까 자식인 네가 불러라*/}
    <Content>
    <Routes> {/*세부적으로 화면을 띄워 줄 코드(Route)를 Routes로 감싸 줘야 함*/}
    {/*path는 주소창의 url을 말함*/}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route> {/* "*" 그 외~ 아무 단어*/}
    </Routes>
    </Content>
    </Container>
    </BrowserRouter>
    </>
}