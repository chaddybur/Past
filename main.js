function pointsPer48(ppg, mpg) {
  if (ppg == 0 || ppg ==0){
    return 0
  }
    let num = (48 / mpg) * ppg
    let number = num.toFixed(1)
    let ans = Number(number)
    
    return ans
  }