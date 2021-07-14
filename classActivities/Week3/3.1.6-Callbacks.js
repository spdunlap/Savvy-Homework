// "regular" functions

function greet(name) {
  return `Hello ${name}!`;
}

console.log(greet);

function welcome(name) {
  return `${name}, welcome!`;
}

console.log(welcome);

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

console.log(informAboutSale);

// function that takes a callback function as an argument

function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

console.log(getNameAndShowMessage);

// pass each "regular" function into getAndShowMessage as a callback function
