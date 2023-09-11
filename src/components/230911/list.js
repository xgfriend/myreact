import styled from "styled-components"

const Container = styled.div` //소문자로 적으면 태그로 인식하기 때문에 Container 앞글자를 대문자로 적어 줌
    width: 100vw;
    margin: 0 auto;
    text-align: center;
` 

const Title = styled.h1`
font-size: 2.5rem;
color: orange;
`

const TitleBlue = styled(Title)` //Title 속성을 포함하고, 내가 원하는 것만 바꿈
color:blue;
`

const Image = styled.img`
    border-radius: 50%;
    width: 50%;
`

export function List(){
    const products = [
        {title: "Banana"},
        {title: "Apple"},
        {title: "Grape"}
    ]
    const user = {
        name: "Hedy Lamarr",
        imageUrl: "https://cdn.britannica.com/96/133096-050-34226B5F/Hedy-Lamarr.jpg",
        imageSize: 90, 
    }
    return(<> 
        <h1>List Component</h1>
        <p>왜 아직도 세 시야</p>
        <ul>
            {
                products.map((p)=>(
                    <li>{p.title}</li> //p.title도 코드기 때문에 중괄호 안에 작성
                    )//return 생략하고 작성 가능
                    )}
        </ul>
        <Container>
            <TitleBlue>{user.name}</TitleBlue> 
            <Image src={user.imageUrl}></Image>
        </Container>
    </>)
}