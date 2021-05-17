class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    const avoid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    let first = words.shift()
    let firstUp = first.charAt(0).toUpperCase() + first.slice(1)

    let rest = words.map(word => {
      if (!avoid.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    })

    return firstUp + " " + rest.join(" ")
  }
}