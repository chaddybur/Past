function charFreq(message) {
  // awesome counter code
    let data = message.split("")
    const obj = data.reduce(function(obj, item) {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
}