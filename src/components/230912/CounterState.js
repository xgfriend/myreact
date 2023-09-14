import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
width: 500px;
text-align:center;
margin: 0px;
h1{
    font-size: 4rem;
}
button{
    margin: 10px;
    width: 100px;
    font-size: 2rem;
}
`

export function CounterState(){
    console.log("CounterState start")
    const [count, setCount] = useState(0)
    // let count = 0
    function minus () {
        setCount(count-1)
        // count = count - 1
        console.log("minus", count)
    }
    function plus (){
        setCount(count+1)
        // count = count + 1
        console.log("plus")
    }
    console.log("CounterState end", count)
    return(<>
    <Container>
    <h1>{count}</h1>
    <button onClick = {minus}>dec</button> {/*onClick = 뒤가 헷갈린다면 객체는 "", 그 제외 다 중괄호*/}
    <button onClick = {plus}>inc</button>
    </Container>
    </>)
}