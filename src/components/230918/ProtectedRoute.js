import { useContext } from "react"
import { Login } from "./Login"
import { GameContext } from "./Gameshop"
import { Navigate } from "react-router-dom"

export function ProtectedRoute({children}) {
console.log(children)
const {user,setUser} = useContext(GameContext)
  if(user.name && user.email){
    return children
    } else {
      return <Navigate to="/login" />
    }
  }

    {/* if (로그인이 되었는지 확인하는 조건 필요){
      return 자식
    } else {
      return 로그인페이지
    } */}
