// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "traveling", "coding"]; // array
let person = { name: "John", age: 25 }; // object

// Output the variables and their types to the console
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("Person object: " + JSON.stringify(person) + " (Type: " + typeof person + ")");

// Operators - Simple Calculator
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Cannot divide by zero.");
            return;
        }
    } else {
        alert("Invalid operation.");
        return;
    }

    alert("Result: " + result);
}

// Functions - Greet User
function greetUser(name) {
    return "Hello, " + name + "! Welcome to the website.";
}

// Part 2: JavaScript Control Structures

// If Statements - Check if eligible to vote
let userAge = prompt("Please enter your age:");
if (userAge >= 18) {
    document.body.innerHTML += "<p>You are eligible to vote!</p>";
} else {
    document.body.innerHTML += "<p>You are not eligible to vote.</p>";
}

// Loops - Display numbers 1 to 10
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.body.appendChild(ol);

// Part 3: Introduction to the DOM

// Creating HTML Structure - Modify existing elements
document.querySelector("h1").textContent = "JavaScript in Action!";

// Add dynamic content to the div
let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
