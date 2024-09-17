//18th question 
// Seeing the World: Think of at least five places you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.

let destination :string[] = ["Sudia","Pakistan", "Lahore","England","Amrica"];
console.log("Original : " + destination);

//Print your array in alphabetical order without modifying the actual list.
console.log('Alpabatical order' + [...destination].sort());

//Show that your array is still in its original order by printing it.
console.log("Original order : " + destination);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(' Reverse Alpabatical order' + [...destination].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log('Original order' + [...destination].sort().reverse());

//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order : " + destination.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original : " + destination.sort().reverse());
