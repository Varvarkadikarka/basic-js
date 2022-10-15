const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let array1 = s1.split('');
  let array2 = s2.split('');
  let commonCar = 0;
  let index;

  array1.filter((item1) => {
    index = array2.findIndex(item2 => item2 === item1);
    // Метод findIndex вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве, до тех пор, пока она не вернёт true. Если такой элемент найден, метод findIndex немедленно вернёт индекс этого элемента. В противном случае, метод findIndex вернёт -1. 
    if (index >= 0) {
      commonCar++;
      array2.splice(index, 1);
    }
  });
  return commonCar; // сравнение двух массивов
}

module.exports = {
  getCommonCharacterCount
};
