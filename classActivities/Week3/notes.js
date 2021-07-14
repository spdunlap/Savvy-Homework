// establishing variable "x"
const x = "somethingElse";

// establishing variable/object myObject
const myObject = {
  x: "accessed the 'x' key",
  y: "accessed the 'y' key",
  somethingElse: "accessed the 'somethingElse' key",
};

// console.log(myObject.x); // accessed the 'x' key
console.log(myObject[x]); // accessed the 'somethingElse' key
console.log(myObject["x"]); // accessed the 'x' key

