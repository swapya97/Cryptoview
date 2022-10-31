function convertToJson(response){
 return response.json();
}
function showData(data) {
    const bitcoin_price_container= document.getElementById('bitcoin_price_container');
    const ethereum_price_container= document.getElementById('ethereum_price_container');
    const cardano_price_container= document.getElementById('cardano_price_container');
    const polkadot_price_container= document.getElementById('polkadot_price_container');
    const helium_price_container= document.getElementById('helium_price_container');
    const binancecoin_price_container= document.getElementById('binancecoin_price_container');
    const stellar_price_container= document.getElementById('stellar_price_container');
    const litecoin_price_container= document.getElementById('litecoin_price_container');
    const tether_price_container= document.getElementById('tether_price_container');
    const dogecoin_price_container= document.getElementById('dogecoin_price_container');

    bitcoin_price_container.innerText = data.bitcoin.inr;
    ethereum_price_container.innerText = data.ethereum.inr;
    cardano_price_container.innerText = data.cardano.inr;
    polkadot_price_container.innerText = data.polkadot.inr;
    helium_price_container.innerText = data.helium.inr;
    binancecoin_price_container.innerText = data.binancecoin.inr;
    stellar_price_container.innerText = data.stellar.inr;
    litecoin_price_container.innerText = data.litecoin.inr;
    tether_price_container.innerText = data.tether.inr;
    dogecoin_price_container.innerText = data.dogecoin.inr;
    
    console.log(data);
}
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Cdogecoin%2Ctether%2Cbinancecoin%2Chelium%2Ccardano%2Csalona%2Cstellar%2Clitecoin&vs_currencies=inr').then(convertToJson).then(showData); 
