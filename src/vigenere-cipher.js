const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(rev = true) {
    this.reverse = rev;
  }

  encrypt(message, key) {
    if ( message === undefined || message === null || message === '' || key === undefined || key === null || key === '') {
        throw new Error('Incorrect arguments!');
      }  
    
    function isUpperCase(letter){
      let l = letter.charCodeAt();
      if(l >= 65 && l <= 90){
        return true;
      }else{
        return false;
      }
    }
    
    function isLowerCase(letter){
      let l = letter.charCodeAt();
      if(l >= 97 && l <= 122){
        return true;
      }else{
        return false;
      }
    }

    let cypher = "";
    for(let i = 0, j = 0; i < message.length; i++){
    let currentLetter = message[i];

    if(isUpperCase(currentLetter)){
      let upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
      cypher += String.fromCharCode(upperLetter+65);
      j++;
    }else if(isLowerCase(currentLetter)){
      let lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
      cypher += String.fromCharCode(lowerLetter+97);
      j++;
    }else{
      cypher += currentLetter;
    }
  }
  return this.reverse ? cypher.toUpperCase() : cypher.toUpperCase().split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if ( encryptedMessage === undefined || encryptedMessage === null || encryptedMessage === '' || key === undefined || key === null || key === '') {
      throw new Error('Incorrect arguments!');
    } 

    function isLetter(letter){
      let l = letter.charCodeAt();
      if(l >= 65 && l <= 90){
        return true;
      }else{
        return false;
      }
    }

    let deCypher = "";
    for(let i = 0, j = 0; i < encryptedMessage.length; i++){
    let currentLetter = encryptedMessage[i];

    if(isLetter(currentLetter)){
      let upperLetter = ((currentLetter.charCodeAt() - 65) - (key[j%key.length].toUpperCase().charCodeAt() - 65));
      if (upperLetter < 0) {
        upperLetter = (upperLetter + 26) % 26;
      } else {
        upperLetter = upperLetter % 26;
      }
      deCypher += String.fromCharCode(upperLetter+65);
      j++;
    }else{
      deCypher += currentLetter;
    }
  }
  return this.reverse ? deCypher.toUpperCase() : deCypher.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
