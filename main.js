function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    // Your code here.
    
    let blueLeft = blueStart - bluePulled
    let redLeft = redStart - redPulled
    
    let total = blueLeft + redLeft
    return blueLeft/ total
  }