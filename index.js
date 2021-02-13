class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let doNotCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedString = []
    let words = string.split(" ")
    for (let i = 0; i < words.length; i++) {
      if (i == 0) {
        titleizedString.push(this.capitalize(words[i]))
      } else {
        if (doNotCapitalize.includes(words[i])){
          titleizedString.push(words[i])
        } else {
          titleizedString.push(this.capitalize(words[i]))
        }
      }
    }
    return titleizedString.join(" ")
  }
}