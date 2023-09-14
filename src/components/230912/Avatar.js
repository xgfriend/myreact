import styled from "styled-components";

const Container = styled.div`
box-sizing: border-box;
width: 300px;
background-color:${(props)=> props.bgcolor};
box-shadow: 1px 2px 3pc gray;
padding: 10px;
margin-bottom: 20px;
`

const Bold = styled.p`
font-weight: 700px;
font-size: 2rem;
color: ${(props)=> props.fontcolor};
`

export function Avatar({
    bgcolor,
    fontcolor,
    person:{name, job, country},
}) {
    return(
        <> 
        <Container bgcolor={bgcolor}> 
            <div>
                <Bold fontcolor={fontcolor}>{name}</Bold>
                <p>Job: {job}</p>
                <p>country: {country}</p>
                <hr />           
            </div>
        </Container>
        </>
    )
}

