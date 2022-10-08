/**
 * ["foo","bar","baz","qux","echo"]
 *
 * contar el total de items que inicien con el caracter "b"
 *
 *
 * output => 2
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = 0;

const cbMap = (item) => {
  item.toLowerCase().includes("b") ? result++ : null;
};

arr.map(cbMap);

//export result
module.exports = result;
