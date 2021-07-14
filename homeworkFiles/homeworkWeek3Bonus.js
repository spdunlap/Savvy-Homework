// Pizza Place Functions

// 1. Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = [
  "cheese",
  " pepperoni",
  " sausage",
  " mushroom",
  " onion",
  " green pepper"
];

let lastTopping = pizzaToppings.pop();

//let b = preparePizza();
//let c = servePizza();

// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// - i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
  console.log(
    `Welcome to A Whole Lotta Pie! Choose from any of our 45 toppings including the classics: ${pizzaToppings} and ${lastTopping}!`
  );
}

// 3. Create a getPizzaOrder function that
// - has the parameters size, crust, and an indefinite amount of toppings as inputs
// - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// - outputs a list with the size, crust, and toppings

let order = [];

function getPizzaOrder(size, crust, ...pizzaToppings) {
  let lastSelectedTopping = pizzaToppings.pop();
  let selection = pizzaToppings;
  if (typeof selection === "string") {
    console.log(`One ${size} ${crust} pizza pie headed to the oven!`);
  } else if (typeof selection !== "string") {
    console.log(
      `One ${size} ${crust} with ${pizzaToppings} and ${lastSelectedTopping} headed to the oven!`
    );
  }

  order.push(size, crust, [...pizzaToppings, lastSelectedTopping]);
  //console.log("this is the order", order[2]);
  return order;
}

// 4. Create a preparePizza function that
// - has an array as its parameter with three items: a size, a crust, and a list of toppings
// - prints something like "...Cooking pizza..."
// - outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

let object = {};

function preparePizza(order) {
  console.log("Thatsa one hot-n-tasty pizza pie baking up!");
  object = {
    orderNumber: "451",
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
  //console.log("object", object);
  return object;
}

// 5. Create a servePizza function that
// - has a parameter of a pizza Object
// - logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// - outputs the same pizza Object that was passed in

function servePizza(pizzaOrder) {
  // finalOrder = {
  //   size: pizzaOrder.size,
  //   crust: pizzaOrder.crust,
  //   toppings: pizzaOrder.toppings
  // }

  let servedTopping = pizzaOrder.toppings.pop();

  console.log(
    `Hot-n-tasty pizza pie ready for consumption! This ${pizzaOrder.size} ${pizzaOrder.crust} tasty pie's got ${pizzaOrder.toppings}, and ${servedTopping}. Enjoy!`
  );
  pizzaOrder.toppings.push(servedTopping);
  console.log(pizzaOrder);
  //return pizzaOrder;
}

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input
greetCustomer();
getPizzaOrder("small", "Chicago Style", "Cheese", "Pepperoni");
preparePizza(order);
servePizza(object);

// 7. Add, commit, and push your JS file to your GitHub repo.

// 8. Send your TA a link to your GitHub Homework repo when finished.

// Bonus Challenge

// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// - i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// 11. In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.

// An example output for this assignment is:

// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers, One large thin crust pizza with sausage, onions, peppers, . Coming up! ...your pizza is cooking... Order up! Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

// { size: 'small', crust: 'thin', toppings: [ 'mushrooms', 'banana peppers' ] }
