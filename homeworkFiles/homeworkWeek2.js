// Pizza Place Homework

// Open the new homework directory in VS Code and create a new JavaScript file - name it something that indicates it is homework for Week 2 - COMPLETE

// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
let pizzaPlace = "HappyPie";
let numberOfToppings = 27;

// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers. - COMPLETE

// Print the variables and their types.
console.log(typeof pizzaPlace, pizzaPlace);
console.log(typeof numberOfToppings, numberOfToppings);
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(
  `Welcome to ${pizzaPlace} home of the giant pizza pie with up to ${numberOfToppings} toppings! Choose your destiny today!`
);

// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings < 10) {
  console.log("Quality, not quantity");
} else {
  console.log("A whole lot of pizza.");
}

// Add, commit, and push your JS file to your GitHub repo.

// Send your TA a link to your GitHub Homework repo when finished.

// Bonus Challenge

// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
for (let i = 2; i <= numberOfToppings; i += 2) {
  console.log(i);
}

// i += 2 is shorthand for i = i + 2

// An example of the output you want for in this assignment is:

// The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.
