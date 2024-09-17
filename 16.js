//16th question 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests = ["alyan", "Ahmad", "Ameen", "Ali"];
// for(let i=0; i < guests.length ; i++ ){
// console.log(`dear  ${guests[i]}  I invite you on dinner tomorrow. \n`)
// };
let unbale = "Ahmad";
let new_guest = "Ahsaan";
guests[1] = new_guest;
for (let i = 0; i < guests.length; i++) {
    console.log(`dear  ${guests[i]}  I invite you on dinner tomorrow. \n`);
}
;
console.log(`${unbale} can't make it to dinner.`);
guests.unshift("Aizal", "Saad", "Barda");
for (let i = 0; i < guests.length; i++) {
    console.log(`dear  ${guests[i]}  I invite you on dinner tomorrow we found bid table so we decided to invite 3 more new guests . \n`);
}
;
export {};
