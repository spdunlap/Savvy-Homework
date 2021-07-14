// Logical Operators // ? what do you expect each line to print?

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log(!(true && false)); // true
console.log(false || !false); // true

// Logical Operators and Truthy/Falsy // ? what do you expect each line to print?

console.log("" && 0); // Not a value; cannot really get an answer as not boolean values
console.log(undefined || null); // null; null shows because
console.log(!``); // true.. non boolean primitive;
console.log(!(1 && "false")); // false; **JS always evaluates a string to true**
console.log(NaN || !"true"); // false

// ? TO DO: set the age variable equal to a number, then use the conditional operator to construct an expression that returns "full menu" if the age is over 10, and "kids menu" if the age is less than 10 let age;

// ? TO DO: using only logical operators (no comparison operators), write an if statement that prints "The number is zero" when num is 0. let num = 0; // * your if statement here *
