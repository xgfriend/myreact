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
import { createContext } from "react";
import { useState } from "react";
import games from "./db/Data"
import { ProtectedRoute } from "./ProtectedRoute";

//map은 배열을 return 
export const GameContext = createContext()
const defaultCheckList = games.map((g)=>{ //여기에 중괄호 넣으면 return을 꼭 적어야 함
  return {
    id: g.id, checked: false
  }
})
export function GameShop() {
  const [user, setUser] = useState({})
  const [checkList, setCheckList] = useState(defaultCheckList)
  // console.log(checkList)
  return (
    <>
    <GameContext.Provider value={{checkList,setCheckList, user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element= {<ProductWrapper />}>
              <Route index element={<Products />} />
              <Route path=":id" element={<SingleProduct />} />
              {/*:id라는 건 이 자리에 무엇이든 올 수 있다 변수다*/}
            </Route>
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
               {/* <Route path="dashboard" element={<Dashboard />} /> */}
            </Route>
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