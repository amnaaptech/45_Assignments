// // 44th Quesstion
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Difne a function with a rest parameter that accept items arugments representing  the our sand wich 
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items:\n");
    items.forEach(singelItem => console.log(singelItem));
    console.log("\nNow Enjoy Sandwich");
}
;
//call the function three times with three number of arguments.
makeSandwich("Chicken", "Cheez", "Ketchap", "Mayo", "Egg");
makeSandwich("Bread", "Jelly");
makeSandwich("Bread", "Kabab", "Salate", "Ketchap", "Mayo");
export {};
