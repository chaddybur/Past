function ensureQuestion(s) {
  let arr = s.split("")
  
  if(arr[arr.length-1] != "?"){
    arr.push("?")
  }
  return arr.join("")
}