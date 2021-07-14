// Named Parameters // write a function that takes two named parameters: // print each named parameter, // then return the parameters added together

function addTwoNumbers(param1 = 1, param2 = 72, ...moreNumbers) {
  let sum = param1 + param2;
  console.log(param1);
  console.log(param2);
  console.log(param1 + param2);
  console.log(...moreNumbers);
  return sum;
}

// invoke the function and pass in two numbers

addTwoNumbers();

// invoke the function and pass in more than two numbers

// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator // add a rest operator to the function's parameters // add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
