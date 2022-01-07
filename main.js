function contamination(text, char){
  // Code here ;)
  if (text == "" || char == ""){
    return ""
  }
  let textArr = text.split("")
  
  for(i = 0; i < textArr.length; i++){
    textArr[i] = char
  }
  return textArr.join("")
}