function integrate(coefficient, exponent) {
  let num = exponent + 1
  let otherNum = coefficient / num
  return `${otherNum}x^${num}`
}