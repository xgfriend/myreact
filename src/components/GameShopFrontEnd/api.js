export function getAllGames(){
    return fetch(`http://localhost:8080/products`, {method: "GET"}).then((response)=>response.json());
  }

  function getGameById(id){
    return fetch(`http://localhost:8080/products${id}`, {method: "GET"}).then((response)=>response.json());
  }

  export function purchaseGames(games){ //하나를 사도 배열로 받을 거임
    const purchaseList = games.map((game)=>{ 
      return {
      game: game,
      quantity: 1,
      }
    })
    return fetch(`http://localhost:8080/products/purchaselist`,
      {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(purchaseList)//purchaseList를 json화해서 받겠다
      }).then((response)=>response.json());
  }

  export function getAllPurchasedGames(){
    return fetch(`http://localhost:8080/pruducts/purchase`,{method: "GET",}).then((response)=>response.json());
  }