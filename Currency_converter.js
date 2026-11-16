function getPrice()
  {
   var coin=document.getElementById("coin").value;
   var currency=document.getElementById("currency").value;
   console.log(coin);

   console.log(currency);
   
   var url="https://api.coingecko.com/api/v3/simple/price?ids="+coin+"&vs_currencies="+currency;
    // Fetch data from api
   fetch(url)
   .then(function(response){
     return response.json();
   })
   .then(function(data){
     console.log(data);
     if(data[coin])
     {
       var price=data[coin][currency];
       console.log(price);
       document.getElementById("result").innerHTML="Price of "+coin+" is: "+price;
     }
     else
     {
       console.log("Coin or currency not found");
       document.getElementById("result").innerHTML="Coin or currency not found";
     }
   })
   .catch(function(error){
     document.getElementById("result").innerHTML="Error in fetching data";
   })
  }