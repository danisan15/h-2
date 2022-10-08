/**
 * ["foo","bar","baz","qux","echo"]
 *
 * modificar a mayúscula el primer caracter de cada item string del array
 *
 *
 * output => ["Foo","Bar","Baz","Qux","Echo"]
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

const cbMap = (word) => {
  let separatedStr = word.split("");
  separatedStr[0] = separatedStr[0].toUpperCase();
  return separatedStr.join("");
};

result = arr.map(cbMap);

//export result
module.exports = result;
