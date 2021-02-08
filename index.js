class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let strArray = string.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];

    for(const word of strArray){
      if(exceptions.includes(word)){
        result.push(word);
      }
      else{
        result.push(this.capitalize(word));
      }
    }
    //Always capitilize the first word.
    result[0] = this.capitalize(result[0]);
    return result.join(' ');

    // If we didn't have conditions,the below code does work.
    // let result =  strArray.map(word => this.capitalize(word));
  }

}