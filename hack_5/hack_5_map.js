/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result
 *
 *
 * output => [7,5,3,1]
 */
let result = [];
let newArr = [7, 5, 3, 1];

const cbMap = (e) => e;

result = newArr.map(cbMap);

//export result
module.exports = result;
