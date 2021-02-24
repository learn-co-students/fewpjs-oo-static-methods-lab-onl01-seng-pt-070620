class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-z '-]/gi, '');
  }

  static titleize(string) {
    const wrongWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let finalArray = [];

    let newArray = string.split(' ')

    for(let i=0; i < newArray.length; i++) {
      if (i == 0) {
        finalArray.push(this.capitalize(newArray[i]))
      }
      else {
        if (wrongWords.includes(newArray[i])){
          finalArray.push(newArray[i])
        }
        else {
          finalArray.push(this.capitalize(newArray[i]))
        }
      }
    }
    return finalArray.join(' ')
  }
}