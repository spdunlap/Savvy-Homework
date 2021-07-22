// refactor your Animal function constructor and methods to use the class keyword
class Animal {
  constructor(name, type, color, weight, age, personality) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.age = age;
    this.personality = personality;
    this.bio = `This ${this.personality}, ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`;
  }
  greet() {
    return `Hello, I am a ${this.type}!`;
  }
  badMood() {
    return "Go away. I am grumpy!";
  }
}
// extend the Animal class with a type of animal // add some unique methods and properties to the class extension
class Kind extends Animal {
  constructor(name, type, color, weight, age, personality, species, location) {
    super(name, type, color, weight, age, personality);
    this.species = species;
    this.location = location;
  }
  greet() {
    return `Hello! I am a ${this.species} ${this.type}, and my name is ${this.name}. I live ${this.location}`;
  }
}

// create an instance of the class extension and call one of its methods
const WinnieThePooh = new Kind(
  "Winnie The Pooh",
  "bear",
  "purple",
  300,
  17,
  "friendly",
  "cartoon",
  "with Christopher Robin"
);

console.log(WinnieThePooh);

console.log(WinnieThePooh.greet());

console.log(WinnieThePooh.badMood());

console.log(WinnieThePooh.bio);
