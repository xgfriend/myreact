import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "./Gameshop";

const Container = styled.div`
width: 300px;
background-color:#eee;
box-shadow: 2px 2px 5px gray;
padding: 20px;
border-radius: 20px;
margin: 50px;
`
const Headers = styled.div`
font-size: 1.5rem;
text-align: center;
`
const Button = styled.button`
width: 100%;
height: 25px;
margin-top: 20px;
background-color: lightblue;
border-radius: 5px;
text-align: center;
cursor: pointer;
font-weight: bold;
color: white;
border: 1px solid blue;
`

export function Login() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const {user, setUser} = useContext(GameContext)
  function onSubmit(e) {
    e.preventDefault()
    //이름과 이메일을 작성하지 않은 경우
    if (!username || !email) { //username이 없거나 email이 없으면
      return //아무것도 안 받아 줌 그냥 리턴시킴 > 마이페이지로 보내지 않음~
    }
    //마이페이지로 보냄
    Navigate("/dashboard")
    //유저 정보를 부모가 관리하도록 setter를 호출함
    setUser({name: username, email: email})
  }

    return (
      <>
        <Container>
          <form>
            <Headers>Login</Headers>
            <div>
              <label>user name</label>
              <br/>
              <input id="name" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div>
            <label>user email</label>
              <br/>
              <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <Button type="submit">제출</Button>
          </form>
        </Container>
      </>
    );
  }