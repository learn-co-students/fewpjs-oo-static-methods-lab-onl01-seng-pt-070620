class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }
  static titleize(sentence){
    let unwantedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArray = sentence.split(" ")
    let r = []

    for (let w = 0; w < wordArray.length; w++) {
      if (w == 0) {
        r.push(this.capitalize(wordArray[w]))
      }
      else {
        if (unwantedWords.includes(wordArray[w])){
          r.push(wordArray[w])
        }
        else {
          r.push(this.capitalize(wordArray[w]))
        }
      }
    }
    return r.join(' ')
  };
}