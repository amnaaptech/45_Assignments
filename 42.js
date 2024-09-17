//42th Question
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach((one_magicians) => console.log(one_magicians));
}
//function to make magicians gret through .map() will modify names
function make_great(magicians) {
    return magicians.map((one_magicians) => `The Great ${one_magicians}`);
}
var magician_name = ["Harry Houdini", "David Copperfield", "David Blaine"];
//call make_great function to modify magicians names
let great_magicians = make_great(magician_name);
//call show_magicians that show modified list of magicians!
show_magicians(great_magicians);
export {};
