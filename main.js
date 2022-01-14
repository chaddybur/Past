Solution
1
function narcissistic(value) {
2
  let number = 0
3
  let arr = value.toString().split("")
4
  
5
  for(i = 0; i < arr.length; i++){
6
    
7
    number += Number(arr[i]) ** arr.length
8
  }
9
  if(number == value){
10
    return true
11
  }else{
12
    return false
13
  }
14
}
15
​
 Correct! You may take your time to refactor/comment your solution. Submit when ready.