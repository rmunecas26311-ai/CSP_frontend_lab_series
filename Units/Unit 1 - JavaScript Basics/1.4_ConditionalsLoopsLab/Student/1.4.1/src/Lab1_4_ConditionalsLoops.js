/*
Lab 004 – Conditionals and Loops
*/

// ✅ TODO 1: if..else with age discounts
let age = 15;
if (age < 12) {
console.log("Child discount: 50% off");
} else if (age < 18) {
console.log("Teen discount: 25% off");
} else if (age >= 65) {
console.log("Senior discount: 30% off");
} else {
console.log("No discount");
}

// ✅ TODO 2: Nested if with two numbers
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
console.log("num1 is greater");
} else if (num1 < num2) {
console.log("num2 is greater");
} else {
console.log("They are equal");
}

// ✅ TODO 3: Switch statement for language greeting
let language = "Spanish";
switch (language) {
case "English":
console.log("Hello!");
break;
case "Spanish":
console.log("¡Hola!");
break;
case "French":
console.log("Bonjour!");
break;
default:
console.log("Language not recognized");
}

// ✅ TODO 4: While loop (1 to 10)
let i = 1;
while (i <= 10) {
console.log(i);
i++;
}

// ✅ TODO 5: Do..while loop (1 to 5)
let j = 1;
do {
console.log(j);
j++;
} while (j <= 5);

// ✅ TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let k = 1; k <= 20; k++) {
if (k === 10) {
console.log("ten");
} else if (k === 20) {
console.log("twenty");
} else {
console.log(k);
}
}

// ✅ TODO 7: Even/Odd loop (1 to 20)
for (let n = 1; n <= 20; n++) {
if (n % 2 === 0) {
console.log(n + " is even");
} else {
console.log(n + " is odd");
}
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
for (let b = 20; b >= 1; b--) {
console.log(b);
}

// - Skip multiples of 3 in even/odd loop
for (let x = 1; x <= 20; x++) {
if (x % 3 === 0) continue;
if (x % 2 === 0) {
console.log(x + " is even");
} else {
console.log(x + " is odd");
}
}