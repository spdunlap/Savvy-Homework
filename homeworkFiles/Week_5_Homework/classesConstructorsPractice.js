// In a .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.
class vehicle {
  constructor(make, model, trim, color, year) {
    this.make = make;
    this.model = model;
    this.trim = trim;
    this.color = color;
    this.year = year;
  }
}

class usedModel extends vehicle {
  constructor(make, model, trim, color, year, mileage, title) {
    super(make, model, trim, color, year);
    this.mileage = mileage;
    this.title = title;
  }
}

class newModel extends vehicle {
  constructor(make, model, trim, color, year, incentive) {
    super(make, model, trim, color, year);
    this.incentive = incentive;
  }
}

// For example: Perhaps you are creating a web store that sells video games and game consoles.

// You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
// Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item.
