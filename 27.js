"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_Color = "green";
//conditions
if (alien_Color === "green") {
    console.log("You shot down free alien you have earned 5 points");
}
else if (alien_Color === "yellow") {
    console.log("You shot down yelow alien you have earned 10 points");
}
else if (alien_Color === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
else {
    console.log("Invalid Color");
}
;
// second version 
let alien_Color2 = "yellow";
if (alien_Color2 === "green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alien_Color2 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alien_Color2 === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
;
// Thrid version
let alien_Color3 = "red";
if (alien_Color3 === "green") {
    console.log("You shot down green alien you have earned 5 points");
}
else if (alien_Color3 === "yellow") {
    console.log("You shot down yellow alien you have earned 10 points");
}
else if (alien_Color3 === "red") {
    console.log("You shot down red alien you have earned 15 points");
}
;
