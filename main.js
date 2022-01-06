function fuelPrice(litres, pricePerLitre) {
  2
    // your code here
  3
    // Good luck with it!
  4
    console.log(litres, pricePerLitre)
  5
    
  6
    if(litres < 2){
  7
      return Number((litres * pricePerLitre).toFixed(2))
  8
    }else if(litres < 4){
  9
      return Number((litres * (pricePerLitre - .05)).toFixed(2))
  10
    }else if(litres < 6){
  11
      return Number((litres * (pricePerLitre - .1)).toFixed(2))
  12
    }else if(litres < 8){
  13
      return Number((litres * (pricePerLitre - .15)).toFixed(2))
  14
    }else if(litres < 10){
  15
      return Number((litres * (pricePerLitre - .2)).toFixed(2))
  16
    }else{
  17
      return Number((litres * (pricePerLitre - .25)).toFixed(2))
  18
    }
  19
  }
  