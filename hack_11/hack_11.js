/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 *
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 *
 *
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]
 */
let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

const addHack = (array) => {
  array.push("h@ck");
  array.unshift("h@ck");
};

addHack(numberArray);

result = numberArray.concat(stringArray);
result.push("h@ck");

for (let i = 0; i < result.length; i++) {
  switch (result[i]) {
    case 1:
      result.splice(i, 1, "one");
      break;
    case 3:
      result.splice(i, 1, "three");
      break;
    case 5:
      result.splice(i, 1, "five");
      break;
    case "foo":
      result.splice(i, 1, "f00");
      break;
    case "bar":
      result.splice(i, 1, "Bar");
      break;
    case "baz":
      result.splice(i, 1, "b@z");
      break;
    case "qux":
      result.splice(i, 1, "quX");
      break;
    case "echo":
      result.splice(i, 1, "3ch0");
      break;
  }
}

console.log(result);

//export result
module.exports = result;
