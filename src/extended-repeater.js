const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    
  function separator (arr, separator = '+') {
    return arr.join(separator);
  }
  function separatorAd (arr, separator = '|') {
    return arr.join(separator);
  }

  if (typeof(str) !== 'string') {
    str = String(str);
  }

  if (typeof(options.addition) !== 'string' && options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  let repeatingStr = [];
  let halfStr = str;

  if (options.addition !== undefined) {
    halfStr = [halfStr + options.addition];
  }

  if (options.additionRepeatTimes > 0) {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
      halfStr.push(options.addition);
    }
  }

  if ( options.additionRepeatTimes !== undefined) {
    let a = separatorAd(halfStr, options.additionSeparator);

    if (options.repeatTimes > 0) {
      
      for (let i = 0; i < options.repeatTimes; i++) {
      repeatingStr.push(a);
      } 
    } else {
        return a;
      }

  } else {
    let b = String(halfStr).replace(/\s/g, '');
    
     if (options.repeatTimes > 0) {
        for (let i = 0; i < options.repeatTimes; i++) {
        repeatingStr.push(b);
      } 
    } else {
        return b;
    }
  }

return separator(repeatingStr, options.separator);
}

module.exports = {
  repeater
};
