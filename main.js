function oddOrEven(array) {
  console.log(array)
 
  let num = array.reduce((a,b) => a+b, 0)
  
  if(num % 2 == 0){
    return "even"
  }else{
    return "odd"
  }
}