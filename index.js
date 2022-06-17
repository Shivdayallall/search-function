
// Document links and Api
const stockList = document.getElementById("stockList");
const searchBar = document.getElementById("searchBar");

let stockArray = [];
let filteredData = [];

// async function loadStocks() {
//     fetch(URL)
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error(`we have a problem: ${response.status}`)
//             }
//             return response.json();
//         })
//         .then(data => {
//             let i = 0;
//             let dataArr = data.length;
//             while(i < dataArr) {
//                 stockArray.push(
//                     {stockName: data[i].name, stockSymbol: data[i].symbol}
//                 )
                    
//             i++
//             }
//             // return stockArray
//         })
// }
// loadStocks();
  let matchList = document.getElementById("stockList");

const searchStock = async (searchText) => {
  const res = await fetch(URL);
  const stocks = await res.json();

  // get matches for current input
  let matches = stocks.filter(stock => {
    const reg_ex = new RegExp(`^${searchText}`,'gi');
    return stock.name.match(reg_ex) || stock.symbol.match(reg_ex);
  })

  if(searchBar.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }
  display(matches)

}

searchBar.addEventListener("input", (e) => {
  let value = e.target.value;
  searchStock(value)
})

  function display(stock) {
    let carPayload = stock.map(payload => {
        return `<li class="character">
        <h3>${payload.name}</h3>
        <h3>${payload.symbol}</h3>
        </li>`
    })

    matchList.innerHTML = carPayload;
}