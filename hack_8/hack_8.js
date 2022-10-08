/**
 * ["foo","bar","baz","qux","echo"]
 *
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *
 *
 * output => ["b@r","b@z","QUX"]
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

for (let i = 1; i <= 3; i++) {
  result.push(arr[i]);
}

const cbMap = (item) => {
  if (item[1] === "a" || item[1] === "A") {
    let splitArr = item.split("");
    splitArr.splice(1, 1, "@");
    return splitArr.join("");
  }
  return item.toUpperCase();
};

result = result.map(cbMap);

//export result
module.exports = result;
