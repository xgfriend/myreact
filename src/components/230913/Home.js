import { Menu } from "./Menu";
import { Button } from "./Button";
import styled from "styled-components";
import { ItemList } from "./ItemList";

const Container = styled.div`
width: 200px;
height: 100vh;
margin: 0 auto;
position: absolute;
top: 0;
left:0;
`
const Content = styled.div`
position: absolute;
top: 0;
left: 200px;
width: ${()=>window.innerWidth - 200}px;
height: 100vh;
`

const XLARGE = "3rem"
const LARGE = "2rem"
const MEDIMU = "1.5rem"
const SMALL = "1rem"
const XSMALL = "0.7rem"


export function Home(){
    return (
        <>
        <Container>
            <Menu fontSize={SMALL}/>
        </Container>
        <Content>
            <div>
            <Button color="white" bgcolor="blue" title="button1"/>
            <Button color="dodgerblue" bgcolor="lightblue" title="button2"/>
            <Button color="teal" bgcolor="lightgreen" title="button3"/>
            </div>
            <div>
                <br/>
                <br/>
                <br/>
                <ItemList />
            </div>
        </Content>
        </>
    )
}