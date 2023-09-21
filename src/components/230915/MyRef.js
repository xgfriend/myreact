import { useEffect, useState,useRef } from "react";
import styled from "styled-components";

export function MyRef(){
    console.log("랜더링")
    const [inputValue,setInputValue] = useState("")
    //count처럼 숫자를 세기 위해 기존 값을 저장하지만 랜더링은 발생시키지 말아야 하는 경우 useRef 후크를 사용해야 함
    //아래 코드처럼 count를 useState로 만들면 횟수를 세는 동안 계속 랜더링을 발생시키는 문제가 있음
    //const [count, setCount] = useState(0)
    const count = useRef(0)
    
    useEffect(()=>{
        count.current = count.current +1
    }, [inputValue]) //inputValue가 바뀔 때마다 count+1
    
    function setValue(e){
        setInputValue(e.target.value)
    }
    return<>
    {/*화면을 변경시켜야 하기에 input은 state 써야 함*/}
    <input value={inputValue} onChange={setValue} />
    <p>rendering 횟수: <span>{count.current}</span></p>
    </>
}