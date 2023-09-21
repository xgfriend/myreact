import { BrowserRouter, Routes,Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";

export function Main(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="/" element={<NavBar/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
}