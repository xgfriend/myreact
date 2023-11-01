import { GameShop } from "./components/GameShopFrontEnd/Gameshop";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

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

const client = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={client}>
    <GameShop />
    </QueryClientProvider>

    {/* <MyRef/> */}
    {/* <OpenWeather cityName = "London"/> */}
    {/* <GlobalStyle /> */}
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