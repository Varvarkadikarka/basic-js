const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) return arr;
  let cloneArr = [...arr];

  for (let i = 0; i < cloneArr.length; i++) {
    
    switch (cloneArr[i]) {
      case "--discard-next":
        cloneArr.splice(i, 2);
        if (cloneArr[i] === "--double-prev" || cloneArr[i] === "--discard-prev") {
          cloneArr.splice(i, 1);
        }
      break;        
      case "--discard-prev": 
        if (i > 0) {
          cloneArr.splice(i-1, 2);
        } else {
          cloneArr.splice(i, 1);
        }
      break;
      case "--double-next": 
       if (i < cloneArr.length -1) {
        cloneArr[i] = cloneArr[i+1];
       } else {
        cloneArr.splice(i, 1);
       }
      break;
      case "--double-prev": 
      if (i > 0) {
        cloneArr[i] = cloneArr[i-1];
      } else {
        cloneArr.splice(i, 1);
      }
      break;
      default: 
      cloneArr = cloneArr;
      break;
    }
  }
return cloneArr;
}

module.exports = {
  transform
};
