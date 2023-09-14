import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const persons = [
   {name: "채영", job: "programmer", country:"대한민국"},
   {name: "지희", job: "student", country:"USA"},
   {name: "다혜", job: "engineer", country:"France"}, 
   {name: "혜정", job: "painter", country:"Germany"},
]

const colors = ["lightgreen", "teal", "lightgray", "khaki"]

export function AvatarList(){
    return(
        <>
        <Container>
            {persons.map((person, i) => ( //여기에 중괄호 쓰려면 return 작성해야 됨
                <Avatar bgcolor={colors[i]} person={person}/>)
            )}
            {/*bgcolor, person이 안 바뀌는 이유는 Avatar.js와 약속한 태그*/}
        {/* <Avatar
        bgcolor="lightblue" //문자열
        fontcolor="darkblue"
        person={{
          name: "Steve",
          job: "programmer",
          country: "대한민국",
        }}
      />
      <Avatar
        bgcolor="lightpink"
        fontcolor="rebeccapurple"
        person={{
          name: "Amy",
          job: "programmer",
          country: "대한민국",
        }}
      />
      <Avatar
        bgcolor="lightgreen"
        fontcolor="green"
        person={{
          name: "Yujin",
          job: "programmer",
          country: "대한민국",
        }}
      /> */}
        </Container>
        </>
    )
}