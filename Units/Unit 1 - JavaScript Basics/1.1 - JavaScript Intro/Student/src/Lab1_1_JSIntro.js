/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Rocco Munecas");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
console.log(favoriteFood);

favoriteFood = "Pizza";
console.log(favoriteFood)

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log("Value: " + mystery + "Datatype: " + typeof mystery);

mystery = 68;
console.log("Value: " + mystery + "Datatype: " + typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
console.log(schoolName);

// TODO 5: Create three valid camelCase variables and print them
let firstname;
let lastName;
let birthyear;

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 16;
console.log(`I am ${age} years old`);

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   let, const, typeof, number
   2. What challenges did you encounter, and how did you solve them?
   I had a problem with the age thing, but I was able to figure it out
   3. Where else could this programming concept be useful?
   =========================================================== */

   let a ="7";
   let b = "3";
   console.log(Number {a} + Number {b});

let area = width * height;
let perimeter = 2 * (width + height);

console.log("Area:", area);
console.log("Perimeter:", perimeter);

console.log(`The rectangle is ${width} units wide and ${height} units tall, 
with an area of ${area} square units and a perimeter of ${perimeter} units.`);