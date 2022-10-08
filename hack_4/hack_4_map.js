/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result
 *
 *
 * output => [1,3,5,7]
 */
let result = [];
let newArr = [1, 3, 5, 7];

const cbMap = (e) => {
  return e;
};

result = newArr.map(cbMap);

//export result
module.exports = result;
