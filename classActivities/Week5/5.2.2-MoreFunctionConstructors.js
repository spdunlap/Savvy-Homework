// create a function constructor that works as a template for an Animal // include properties for name, type, weight, etc.
function Animal(name, type, color, weight, age, personality) {
  this.name = name;
  this.type = type;
  this.color = color;
  this.weight = weight;
  this.age = age;
  this.personality = personality;
  this.bio = `This ${this.personality}, ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`;
}

// create a new instance on an Animal
const WinnieThePooh = new Animal(
  "Winnie The Pooh",
  "bear",
  "purple",
  300,
  17,
  "friendly"
);

console.log(WinnieThePooh);

// add methods to the Animal prototype
Animal.prototype.greet = function() {
  return `Hello, I am a ${this.type}!`;
};

// console.log(WinnieThePooh.greet());
// attach a method directly to the Animal instance that "overwrites" a prototype method

WinnieThePooh.greet = function badMood() {
  return "Go away. I am grumpy!";
};
// console.log(WinnieThePooh);
console.log(WinnieThePooh.greet());
