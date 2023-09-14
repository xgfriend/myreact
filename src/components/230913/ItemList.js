import { useState } from "react";
import styled from "styled-components";

export function ItemList(){
    const [newItem, setNewItem] = useState("")
    // let newItem
    const [items, setItems] = useState([])
    function onChange(e){
    //리액트 onChange 이벤트는 바닐라스크립트에서의 keydown 이벤트처럼 입력할 때마다 발생함(설계 방식이 다름)
    setNewItem(e.target.value) //키보드 하나하나 누를 때마다 이벤트 발생
    console.log(e.target.value)
}
    function addItem(){
    const temp = [...items, newItem]
        setItems(temp)
        setNewItem("") //input 입력창을 clear시킴
        console.log("additem 함수안", items)
    }//이 코드 라인 안에서는 items는 변경되라는 명령어를 내렸을 뿐 변경되기 전임
    console.log("itemlist 컴포넌트안", items)

    return (<>
    <input placeholder="물품 이름을 입력하세요" onChange={onChange} value={newItem} />
    {/*다 쓰고 엔터를 쳤을 때 발생하는 것이 온체인지, 내가 입력한 그 값이 뉴아이템*/}
    <button onClick={addItem}>물품 추가</button>
    <h3>물품 목록</h3>
    <ul>
        {
            items.map((item, index)=>(<li key={index}>{item}</li>))
        }
    </ul>
    </>)
}