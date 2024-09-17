//43th Question.
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach((one_magicians) => console.log(one_magicians));
}
//function to make magicians gret through .map() will modify names
function make_great(magicians) {
    return magicians.map((one_magicians) => `The Great ${one_magicians}`);
}
var magician_name = ["Harry Houdini", "David Copperfield", "David Blaine"];
//making a copy of orignal array through .Slice() function.
let copy_magician_name = magician_name.slice();
//modify the copied array to include "The Great with their names"
let copy_great_magicians = make_great(copy_magician_name);
//show both arrays original and copied 
//original 
console.log("Original Array \n");
show_magicians(magician_name);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
export {};
