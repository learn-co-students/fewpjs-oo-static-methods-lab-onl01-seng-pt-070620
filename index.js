class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    
  }
  static titleize(sentence) {
    let array = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOfWords = sentence.split(" ")
    
    for (let i = 0; i < arrayOfWords.length; i++)
    if (array.includes(arrayOfWords[i]) && i != 0) {
      result.push(arrayOfWords[i])
    } else {
      result.push(this.capitalize(arrayOfWords[i]))
    }
    return result.join(" ")
  }
}

