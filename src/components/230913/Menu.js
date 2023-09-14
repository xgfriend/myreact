import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 100%;
background-color: lightgray;
`
const Li = styled.li`
width: 100%;
padding-left: 20px;
list-style: none;
font-size:${(props)=>props.fontSize};
font-weight: bold;
`

const Link = styled.a`
text-decoration: none;
color: white;
padding: 0 5px;
&:hover{
    background-color:white;
    color: lightcoral;
}
`

export function Menu() {
    const fontSize = "1.5rem"
    return <>
    <Container>
        <ul style = {{display:"flex", flexWrap: "wrap"}}>
        <Li fontSize={fontSize}>
            <Link herf="#">Home</Link>
        </Li>
        <Li fontSize={fontSize}>
            <Link herf="#">Content</Link>
        </Li>
        <Li fontSize={fontSize}>
            <Link herf="#">About Us</Link>
        </Li>
        <Li fontSize={fontSize}>
            <Link herf="#">Contact</Link>
        </Li>
        <Li fontSize={fontSize}>
            <Link herf="#">Social</Link>
        </Li>
        </ul>
    </Container>

    </>
    }