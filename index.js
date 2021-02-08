class Formatter {
    static capitalize(word){
      let newWord = word.slice(1)
      return `${word.charAt(0).toUpperCase()}${newWord}`;
    }

    static sanitize(word) {
      return word.replace( /[^A-Za-z0-9 '-]/g, '' );
    }

    

    static titleize(words) {
      let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let wordsArray = words.split(' ')
      
      let newTitle = wordsArray.slice(1).map(word =>{
        let hasWord = badWords.some(badWord => {
          return word === badWord
        })
        if(hasWord == false){
          return this.capitalize(word)
        }
        else {
          return word
        }
      })
      return this.capitalize(words.split(' ').slice(0,1).toString()) + " " + newTitle.join(' ')
    }
}