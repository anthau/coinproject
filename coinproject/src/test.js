const axios=require('axios')
exports.area = function () {
    console.log("moi");
};

exports.area2 = class {
    
    constructor() {
  
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400')
            .then(function (response) {
               
               console.log(response.data.prices);
            })
     
      
    }
};