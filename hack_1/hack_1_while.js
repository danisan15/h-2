/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result
 *
 *
 * output => [0,1,2,3,4,5]
 */
let result = [];
let i = -1;

while (result.length < 6) {
  i++;
  result.push(i);
}

//export result
module.exports = result;
