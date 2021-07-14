// create an Array using an Array literal
const fruit = ["apple", "orange", "peach", "blackberry", "lime"];

// access the 1st item in the Array
console.log(fruit[0]);

// access the last item in the Array
console.log(fruit[4]);

// print the length of the Array
console.log(fruit.length);

// use the length property to access the last item in the Array
console.log(fruit[fruit.length - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
for (let elementInTheArray of fruit) {
  console.log(elementInTheArray + " juice");
}
