const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
// console.log("first index of a;", arr.indexOf("a"));
// console.log("first index of b;", arr.indexOf("b"));
// console.log("first index of c;", arr.indexOf("c"));

// find the last index of "a", "b", and "c"
// console.log("last index of a;", arr.lastIndexOf("a"));
// console.log("last index of b;", arr.lastIndexOf("b"));
// console.log("last index of c;", arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance // repeat until there is just one "a"
// console.log("array length;", arr.length);

function removeDups(array, letter) {
  let firstA = arr.indexOf(letter);
  let lastA = arr.lastIndexOf(letter);
  while (firstA !== lastA) {
    array.splice(lastA, 1);
    lastA = array.lastIndexOf(letter);
  }
  return array;
}

console.log(removeDups(arr, "a"));
