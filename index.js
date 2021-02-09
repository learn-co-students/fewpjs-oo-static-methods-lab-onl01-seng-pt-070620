class Formatter {
  //add static methods here
  static capitalize(sentence) {
    let fletter = sentence.slice(0, 1) 
    let roSentence = sentence.slice(1, 99) 
    let cap = fletter.toUpperCase()
    return cap + roSentence
  }

  static sanitize(sentence) {
    sentence = sentence.replace( /[^A-Za-z0-9 '-]/g, '' )
    return sentence
  }

  static titleize(sentence) {
    let banned = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let final = []
    let words = sentence.split(" ")
    for (let i = 0; i < words.length; i++){
      if (i==0){
        final.push(this.capitalize(words[i]))
      } else {
      if (banned.includes(words[i])) {
        final.push((words[i]))
      } else {
        final.push(this.capitalize(words[i]))
      }}
    }
    return final.join(" ")
  }
}