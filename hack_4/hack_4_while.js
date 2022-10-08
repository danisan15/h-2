/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result
 *
 *
 * output => [1,3,5,7]
 */
let result = [];
let counter = 1;

while (counter <= 7) {
  result.push(counter);
  counter += 2;
}

//export result
module.exports = result;
