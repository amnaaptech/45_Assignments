"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
let age = 16;
if (age < 2) {
    console.log("Your are a Baby");
}
else if (age >= 2 && age < 4) {
    console.log("you are a Tolder");
}
else if (age >= 4 && age < 13) {
    console.log("you are a Kid");
}
else if (age >= 13 && age < 20) {
    console.log("your a Teenagers");
}
else if (age >= 20 && age < 65) {
    console.log("you are a Adult");
}
else if (age >= 65) {
    console.log("You are Elders");
}
;
