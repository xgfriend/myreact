import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import {ProtectedRoute} from "./ProtectedRoute"
import { getAllGames } from "./api";
import { useQuery } from "react-query";


export const GameContext = createContext()


function GameShopLoader({games, isGamesLoading}) {
  const defaultCheckList = games.map((g)=>{
    return {id: g.id, checked: false}
  })
  const [checkList, setCheckList] = useState(defaultCheckList)
  const [user, setUser] = useState({})
  //data의, isLoading의 별명을 정해 줌 > usequery가 getallgames를 불러 주는 것
  return (
    <>
      <GameContext.Provider value={{checkList, setCheckList, user, setUser, games, isGamesLoading}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<ProductWrapper />}>
              <Route index element={<Products />} />
              <Route path=":id" element={<SingleProduct />} />
              {/*:id라는 건 이 자리에 무엇이든 올 수 있다 변수다*/}
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Other />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}

export function GameShop() {
  const {data: games, isLoading: isGamesLoading} = useQuery("games",getAllGames);
  //data의, isLoading의 별명을 정해 줌 > usequery가 getallgames를 불러 주는 것
  return <>
  {
    !isGamesLoading && <GameShopLoader games={games} isGamesLoading={isGamesLoading} /> // !isGamesLoading ? <GameShopLoader: null /> 이게 false면 null > 로딩 중이면 아무것도 하지 마라
  }
  </>
}