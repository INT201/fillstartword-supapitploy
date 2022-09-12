const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if(word === null || word === undefined){
    return undefined;
  }
  if(startWord.includes(word)){     
    return word;
  }
  return startWord + word;
}
module.exports = fillStartWord
