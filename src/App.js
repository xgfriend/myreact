import { Session } from "./components/230911/Session"
import { List } from "./components/230911/list"
import { Tab } from "./components/230911/Tab"
import { Avatar } from "./components/230912/Avatar";
import { AvatarList } from "./components/230912/AvatarList";
import { PropsTest } from "./components/230912/PropsTest";
import { CounterState } from "./components/230912/CounterState";
import { Menu } from "./components/230913/Menu";
import { Home } from "./components/230913/Home";
import { createGlobalStyle } from "styled-components";
import { Gallery } from "./components/230914/Gallery";
import { OpenWeather } from "./components/230914/OpenWeather";
import { MyRef } from "./components/230915/MyRef";
import { MyRouter } from "./components/230915/MyRouter";
import { GameShop } from "./components/230918/Gameshop";
import { UseContext } from "./components/230919/UseContext";
import { Main } from "./components/project/Main";
import { First } from "./components/project/First";
import { MyMotion1 } from "./components/230922/MyMotion1";
import { Gesture } from "./components/230922/Gesture";
import { MyMotion2 } from "./components/230922/MyMotion2";
import { Calendar } from "./components/project/Calendar";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*{
margin: 0;
padding:0;
box-sizing: border-box;
font-family: poppins,GmarketSansMedium;
}
`

function App() {
  return (
    <>
    
    {/* <Main /> */}
    {/* <First/> */}
    {/* <NavBar/> */}
    {/* <UseContext /> */}
    {/* <GameShop /> */}
    {/* <MyRef/> */}
    {/* <OpenWeather cityName = "London"/> */}
    <GlobalStyle />
    <Calendar/>
    {/* <MyMotion2/> */}
    {/* <MyMotion1/> */}
    {/* <Home /> */}
      {/* <PropsTest
      firstName="철수"
      score={{
      math: "90",
      english: "90",
      history: "90",
      }}
      /> */}
      {/* <Avatar
        bgcolor="lightblue" //문자열
        fontcolor="darkblue"
        person={{
          name: "Steve",
          job: "programmer",
          country: "대한민국",
        }} //객체를 사용하기 위해선 person={{}}의 형식을 써야한다.
        // 변수(고정되지 않은 문자열)를 쓸 때 {}중괄호를 사용하기 때문에 {}첫번째 중괄호
        // 두번째 {}중괄호는 변수를 사용하기 위함
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
    </>
  );
}
export default App;