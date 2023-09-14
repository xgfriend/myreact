import styled from "styled-components"
const StyleButton = styled.button`
width: 150px;
height: 40px;
padding: 10px 20px;
font-size: 1.3rem;
border-radius: 10px;
line-height: 7px;//텍스트를 주어진 높이에서 세로로 움직이게 함
color: ${(props)=>props.color};
background-color: ${(props)=>props.bgcolor};

`

export function Button({color, bgcolor, title}){
    return (
        <>
        <StyleButton color={color} bgcolor={bgcolor}>
            {title}
        </StyleButton>
        </>
    )
}