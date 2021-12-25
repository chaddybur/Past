function getNumberFromString(s) {
    let arr = [0,1,2,3,4,5,6,7,8,9]
    let sArr = s.split("")
    let ans = []
    
    for(i = 0; i < sArr.length; i++){
      for(j = 0; j < arr.length; j++){
        if(sArr[i] == arr[j]){
          ans.push(arr[j])
          
        }
      }
    }
    let answer = ans.join("")
    return Number(answer)
  }