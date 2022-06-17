// Document links and Api
const URL = '';
const stockList = document.getElementById("stockList");
const searchBar = document.getElementById("searchBar");

let stockArray = [];
let filteredData = [];

async function loadStocks() {
    fetch(URL)
        .then(response => {
            if(!response.ok) {
                throw new Error(`we have a problem: ${response.status}`)
            }
            return response.json();
        })
        .then(data => {
            let i = 0;
            let dataArr = data.length;
            while(i < dataArr) {
                stockArray.push(
                    {stockName: data[i].name, stockSymbol: data[i].symbol}
                )
                    
            i++
            }
            stockArray.sort(compare);
            console.log(stockArray)
        })
}
loadStocks();

function compare(a, b) {
    if (a.stockName < b.stockName){
      return -1;
    }
    if (a.stockName > b.stockName){
      return 1;
    }
    return 0;
  }

  searchBar.addEventListener("keyup", (e) => {
        console.log(stockArray.length)
        let value = e.target.value.toLowerCase();
    
        filteredData = stockArray.filter(payload => {
            return payload.stockName.charAt(0) === value ||
            payload.stockSymbol.charAt(0) === value;
    
        })
        console.log(filteredData)
    })
    

  function display(stock) {
    let carPayload = stock.map(payload => {
        return `<li class="character">
        <h3>${payload.stockName}</h3>
        <h3>${payload.stockSymbol}</h3>
        </li>`
    })

    document.getElementById("stockList").innerHTML = carPayload;
}