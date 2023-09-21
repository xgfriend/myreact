import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
height: 100vh; //이게 없으면 세로 센터를 잡지 못함
display: flex;
justify-content: center;
align-items: center;
`
const Card = styled.div`
width: 500px;
height: 300px;
background: linear-gradient(90deg, lightblue, dodgerblue);
//background-color가 아님!! 주의해야 함
color: white;
border-radius: 10px;
display: grid;
grid-template-columns: 1fr 1fr;
`

const Icon = styled.div`
text-align: center;
img{
    width: 100%;
    margin-top: 20px;
    margin-left: 2.3rem;
}
`
const Weather = styled.div`
display: flex;
flex-direction: column;
text-align: end;
padding-top: 25px;
padding-right: 20px;
`
const Temp = styled.div`
font-size:3rem;
`
const City = styled.div`
font-size:2.5rem;
`
const Info = styled.div`
font-size: 1.5rem;
margin-top: 20px;
`

export function OpenWeather({cityName}){
    const API_KEY="a46f756b84d4ad6f5fc82ce2175f94f9"
    const API_KEY_NINJA = "0oCfJ3nX4YI7499Toyj5og==g8QMtbm8sOxhY5fn"
    const [icon, setIcon] = useState(null)
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
//화면에서 변경되는 값은 모두 State로 관리한다라고 생각하면 됨
    console.log("랜더링")

//useEffect() 후크
//useEffect는 특정한 State의 변화에만 실행되는 코드를 내부에 정의할 수 있다 > useEffect(()=>{}, [icon]) > icon이 변하면 실행
//component가 최초에 로딩될 때 딱 한 번만 실행되는 코드를 정의할 수 있다 > useEffect(()=>{}, []) > 나는 어떠한 state에 관심 없어 최초 1회 반복
//두 번째 파라미터에 배열 형식으로 의존하는 state를 결정할 수 있다
//빈 배열([])을 사용하면 최초 로딩 시 딱 한 번만 실행된다

useEffect(()=>{
  if (cityName){
    //닌자한테 해당 도시의 위도, 경도를 요청
    const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`
    fetch(urlToNinja, {
      headers: {
        "X-Api-Key" : API_KEY_NINJA,
      },
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      const position = {
        coords:{
          latitude: data[0].latitude,
          longitude: data[0].longitude,
        },
      }
      geoOK(position)
      //다음 할 일
    }).catch((error)=>{
      geoError(error)
    })
  } else {
    //특정도시 이름을 입력하지 않았으므로 그냥 현재 위치를 요청
    navigator.geolocation.getCurrentPosition(geoOK, geoError) //현재 위치를 알기 위해서
  }
}, [])


function geoOK(position){
  const lat = position.coords.latitude //위도
  const lon = position.coords.longitude //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  //위도 경도를 담아서 url로 쏘면 json이 응답함
  //이렇게 쓰는 게 rest API만의 방법임
  fetch(url).then((response)=>{ 
    return response.json()
  }).then((data)=>{
    console.log(data)
    //내가 만든 State를 활용하는 방법 > setter 함수를 이용했음
    setCity(data.name)
    setTemp(data.main.temp)
    setIcon(data.weather[0].icon)
    setWeather(data.weather[0].main)
  }).catch((error)=>{
    console.log('요청이 실패했습니다.', error)
  })
}

function geoError(){
  alert('현재 위치 정보를 찾을 수 없습니다.')
}
    return <> {/*return 옆에 뭐라도 꼭 붙어 있어야 함. 리턴은 같은 줄을 돌리게끔 되어 있음*/}
    <Container>
        <Card>
            <Icon><img src = {`https://openweathermap.org/img/wn/${icon}@2x.png`}/></Icon>
            <Weather>
                <Temp>{temp}<i className="ti ti-temperature-celsius"></i></Temp>
                <City>{city}</City>
                <Info>{weather}</Info>
            </Weather>
        </Card>
    </Container>
    </>
}