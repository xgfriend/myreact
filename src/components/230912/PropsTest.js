import styled from "styled-components"

const Container = styled.div`
width: 400px;
margin: 0 auto; //본인의 자신을 가운데에 놓으려고 > display center는 자식들 제어
text-align: center;
`
const Table = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`
// const firstName = "철수"
// const score = [{math: "90", english: "90", history: "90"}]

export function PropsTest({firstName, score: {math, english, history}}) {
    return <>
    <Container>
        <h1>{firstName}</h1>
            <Table>
                <h3>Math</h3>
                <p>{math}</p>
                <h3>English</h3>
                <p>{english}</p>
                <h3>History</h3>
                <p>{history}</p>
            </Table>
    </Container>
    </>
}