"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alien_Color = "Green";
if (alien_Color === "Green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
;
//2nd version
if (alien_Color === "Purple") {
    console.log("My Color is Purple");
}
else {
    console.log("My Color is  not Purple");
}
;
