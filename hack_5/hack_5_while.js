/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result
 *
 *
 * output => [7,5,3,1]
 */
let result = [];
let counter = 7;

/* It's assigning 1 to counter and then checking if it's truthy. */
while (counter >= 1) {
  result.push(counter);
  counter -= 2;
}

//export result
module.exports = result;
