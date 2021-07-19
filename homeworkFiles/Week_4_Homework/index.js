document.title = "Taste of Malaysia";

document.querySelector("#laksa").src = "images/m_food.JPG";

const unorderedList = document.createElement("ul");

// adds new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);

// creates new list item (li) elements
const navItem = document.createElement("li");
navItem.textContent = "Home";
const navItem2 = document.createElement("li");
navItem2.textContent = "Map";
const navItem3 = document.createElement("li");
navItem3.textContent = "Cuisine";

// adds the li elements to the ul in nav-bar
document.querySelector(".nav-bar > ul").appendChild(navItem);
document.querySelector(".nav-bar > ul").appendChild(navItem2);
document.querySelector(".nav-bar > ul").appendChild(navItem3);
