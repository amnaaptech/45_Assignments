//17th question 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests : string[] = ["alyan" , "Ahmad" , "Ameen" , "Ali"];

let unbale : string = "Ahmad";
let new_guest : string = "Ahsaan";
guests[1] = new_guest

for(let i = 0; i < guests.length; i++){
    console.log(`dear  ${guests[i]}  I invite you on dinner tomorrow. \n`)
};
console.log(`${unbale} can't make it to dinner.`)


guests.unshift("Aizal" , "Saad" , "Barda");
// for(let i = 0; i < guests.length; i++){
//     console.log(`dear  ${guests[i]}  I invite you on dinner tomorrow we found bid table so we decided to invite 3 more new guests . \n`)
// };


 console.log("Unfortunatly , i can only invite two people for dinner");
while (guests.length > 2 ){
    let removedGuest = guests.pop();
    console.log(`sorry ${removedGuest}, i can't inivte you to dinner.`)
};
for(let i = 0; i < guests.length; i++){
    console.log(`dear  ${guests[i]} Yes your Still invited on tommorrow dinner. \n`)
};
 guests.splice( 0,2)
console.log(guests);

