import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "./Gameshop";
import { Purchase } from "./Purchase";


const Container = styled.div`
position: relative;
`
const Card = styled.div`
width: 400px;
height: 100px;
display: flex;
border: 1px solid dodgerblue;
margin: 10px 0;
position: relative;
`
const Img = styled.img`
height: calc(100%-2);
margin: 1px;
`
const Text = styled.div`
margin-left: 10px;
font-size: 0.5rem;
`
const DeleteBtn = styled.button`
width:30px;
height: 100%;
background-color:teal;
position: absolute;
right:0;
text-align: center;
line-height: 100px;
border: none;
cursor: pointer;
`

export function Other() {
  const {checkList, setCheckList, games} = useContext(GameContext)
  const [totalPrice, setTotalPrice] = useState(0) //계산
  const [purchasing, setPurchasing] = useState(false)
  const newList = games.filter((g,i)=>checkList[i].checked) //체크리스트에서 체크된 녀석만 새로운 리스트에 담겠다라는 의미
  //삭제버튼
  function onClick(e){
    const temp = checkList.map((item)=>{
      if(item.id == e.target.id) {
        return {...item, checked: false}
      } else {
        return item
      }
    })
    setCheckList(temp)
  }

function onClickBtn (){
  setPurchasing(true);
}
  
//체크 버튼이 바뀌면 가격을 다시 측정해라
  useEffect(()=>{
    let price=0
    for (let i=0; i<newList.length; i++){
      price = price + newList[i].price
    }
    setTotalPrice(price);
  },[checkList])
  //[] 안에 빈 배열이면 최초 한 번만 실행, 배열 자체가 없으면 매번 함 useEffect를 쓰는 의미가 없음


      return (
      <>
      {!purchasing ?<><Container>
          {
            newList.map((game)=>(
            <Card key = {game.id}>
              <Img src={game.image}/>
              <div>
                <Text>타이틀: {game.title}</Text>
                <Text>장르: {game.genre}</Text>
                <Text>가격: {game.price}</Text>
              </div>
              <DeleteBtn id = {game.id} onClick={onClick}>X</DeleteBtn>
            </Card>
            ))
          }
        </Container>
        <h3>총 결제 금액: {totalPrice}원</h3>
      <button onClick={onClickBtn}>결제버튼</button></>  : <Purchase list = {newList}/>};
        {/* <Container>
          {
            newList.map((game)=>(
            <Card key = {game.id}>
              <Img src={game.image}/>
              <div>
                <Text>타이틀: {game.title}</Text>
                <Text>장르: {game.genre}</Text>
                <Text>가격: {game.price}</Text>
              </div>
              <DeleteBtn id = {game.id} onClick={onClick}>X</DeleteBtn>
            </Card>
            ))
          }
        </Container>
        <h3>총 결제 금액: {totalPrice}원</h3>
      <button onClick={onClickBtn}>결제버튼</button> */}
      </>
    );
  }