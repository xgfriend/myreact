import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export function UseContext(){
    const [user, setUser] = useState("Chaeyeoung")
    // const user = "Chaeyeoung"
    //Provider를 사용하면 모든 자식들에게 영향을 미침
    //Provider는 state를 이용해야 함
    return <>
    <UserContext.Provider value={user}>
    <h1>UseContext</h1>
    <Component1/>
    </UserContext.Provider>
    </>
}

function Component1 () {
    return<>
    <h1>component1</h1>
    <Component2 />
    </>
}

function Component2 () {
    return<>
    <h1>component2</h1>
    <Component3  />
    </>
}

function Component3 () {
    return<>
    <h1>component3</h1>
    <Component4 />
    </>
}

function Component4 () {
    const user = useContext(UserContext)
    return<>
    <h1>component4</h1>
    <p> Hello {user}</p>
    </>
}