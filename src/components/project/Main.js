import { BrowserRouter, Routes,Route } from "react-router-dom";
import { NavBar } from "./NavBar.js";
import { First } from "./First.js";
import { Second } from "./Second.js";
import { Third } from "./Third.js"
import { Fourth } from "./Fourth.js";

export function Main(){
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar/>}></Route>
        <Route path="first" element={<First/>}></Route>
        <Route path="second" element={<Second/>}></Route>
        <Route path="third" element={<Third/>}></Route>
        <Route path="fourth" element={<Fourth/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
}