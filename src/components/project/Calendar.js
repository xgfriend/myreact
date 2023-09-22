import styled from "styled-components"

const HEIGHT = "500"

const Container = styled.div`
display: flex;
flex-direction: column;
width: 500px;
height: ${HEIGHT}px;
background-color: black;
`
const Schedule = styled.div`
display: flex;
width: 100%;
height: ${HEIGHT/5}px;
margin-top: 20px;
border-bottom: 1px solid gray;
`
const Date = styled.div`
width: 30px;
height: 30px;
color: white;
`
const Match = styled.div`
width: 20px;
height: 20px;
border-radius: 30px;
background-color: gold;
text-align: center;
color: gray;
margin-right: 10px;
`
const Content = styled.div`
color: white;
`

export function Calendar () {
    return<>
    <Container>
    <Schedule>
        <div style={{ display: "flex", paddingLeft : "10px"}}>
        <Date>25</Date>
        <Match>R</Match>
        <Content>Group A match</Content>
        </div>
    </Schedule>
    <Schedule>
        <Date>26</Date>
        <Match>R</Match>
        <Content>한국 팀 없음</Content>
    </Schedule>
    <Schedule>
        <Date>27</Date>
        <Match>R</Match>
        <Content>8강 3판 2선 승제</Content>
    </Schedule>
    <Schedule>
        <Date>28</Date>
        <Match>R</Match>
        <Content>4강 준결승</Content>
    </Schedule>
    <Schedule>
        <Date>29</Date>
        <Match>R</Match>
        <Content>메달 결정전</Content>
    </Schedule>
    </Container>
    </>
}