import { Outlet, useNavigate } from "react-router-dom";
import games from "./db/Data"
import styled from "styled-components";
import { useContext } from "react";
import { GameContext } from "./Gameshop";

const Container =styled.div`
width: 600px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
const Img = styled.img`
width: 100%;
`

const Text = styled.p`
margin-left: 10px;
`

const Card = styled.div`
width: 180px;
border: 2px solid dodgerblue;
margin-bottom: 20px;
font-size: 0.8rem;
cursor: pointer;
`

export function Products() {
    const navigate = useNavigate()
    const {checkList, setCheckList} = useContext(GameContext)
    function onChange (e) {
      const temp = checkList.map((item)=>{
        if (item.id == e.target.id) {
          return {...item, checked: e.target.checked}
        } else {
          return item
        }
      })
      console.log(temp)
      setCheckList(temp) //check한 것을 저장, console.log에 두 번 찍히는 이유는 gameshop에서도 관리, 저장하고 있기 때문에 gameshop에서도 다시 랜더링됨
    }
    function onClick (id) {
        //상대 경로는 '/' 없이 작성함. 현재 주소 뒤에 붙어서 이동
        navigate(`${id}`)
        //절대 경로는 '/'로 시작되는 root 이하 전체 주소를 적어야 함
        //navigate(`/products/&{id}`)
    }
  return (
    <>
    <h3>Games List</h3>
      <Container>
    {
        games.map((game, i) =>(
        <Card key={game.id}>
            <div onClick={()=>onClick(game.id)}>
            <Img src={game.image}/>
            <Text>타이틀: {game.title}</Text>
            <Text>장르: {game.genre}</Text>
            <Text>가격: {game.price}</Text>
            </div>
            <input type="checkbox" id={game.id} onChange={onChange} checked={checkList[i].checked}/>
        </Card>
        ))
    }
      </Container>
    </>
  );
}

//outlet 자식을 호출하기 위한 태그 > SingleProduct
//map 사용 시 key 무조건 작성 필요

// onClick={onClick} > 클릭이벤트가 발생하면 {onClick} 콜백 함수를 불러 줘
// 애로우 함수로 바꿨을 때, 다른 의미인데......... 
// onClick={('e')=>onClick(game.id)}