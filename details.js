function convertToJson(response) {
    return response.json();
}

function showInfo(data) {
    const coin_img = document.getElementById('coin_img');
    const coin_name = document.getElementById('coin_name');
    const coin_description = document.getElementById('coin_description');
    
    // DOM manipulation
    coin_img.src = data.image.large;
    coin_name.innerText = data.name;
    coin_description.innerHTML =data.description.en;
    
    console.log(data);
}

function showPrice(data) {
    const inr_price = document.getElementById('inr_price');
    const usd_price = document.getElementById('usd_price');
    const eur_price = document.getElementById('eur_price');

    // DOM manipulation
    inr_price.innerText = data[coin_id].inr;
    usd_price.innerText = data[coin_id].usd;
    eur_price.innerText = data[coin_id].eur;
    console.log(data);
}

function showHistory(data) {
    showGraph(data);
     console.log(data);
}

var url = new URL(window.location.href);  
var params = new URLSearchParams(url.search);
let coin_id = params.get("coin");

fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`).then(convertToJson).then(showInfo);
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin_id}&vs_currencies=inr%2CUSD%2Ceur`).then(convertToJson).then(showPrice);
fetch(`https://api.coingecko.com/api/v3/coins/${coin_id}/market_chart?vs_currency=inr&days=14&interval=daily`).then(convertToJson).then(showHistory);

function convertUnixToReadable(timestamp){
    
    const date = new Date(timestamp);
    
    const date_String =  date.getDate();
    
    const month_String = "0" + date.getMonth();
    
    const year_String =   date.getFullYear(); 

    const readable = date_String+ '-' + month_String + "-" +year_String ;
    return readable;
}


function showGraph(history_data){

    let labels = [];
    let prices = [];

    for (let i=0;i < history_data.prices.length;i+=1) {
        const single_price = history_data.prices[i];
        
        const readable_lable = convertUnixToReadable(single_price[0]);
        labels.push(readable_lable);
        prices.push(single_price[1]);
    }
console.log(labels);
console.log(prices);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label:'[# INDIAN SITE ] # Price in INR',
            data:history_data.prices,
            backgroundColor: [
                'rgba(225, 59, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    
});
const config = {
    type: 'line',
    data: data,
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
    
    }
  };


}


