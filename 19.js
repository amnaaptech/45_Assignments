//14th question 
//Guest list, if you could invite anyone , living or deceased , to dinner ,who would you invite? Make a list that include at least three peopel you'd like to invite to dinner , then use you list to print a message to each person , inviting them to dinner"
let guests = ["alyan", "Ahmad", "Ameen", "Ali"];
guests.forEach(guests => {
    console.log(`Dear ${guests} , would like to join me for dinner?`);
});
//15th question 
//Changing Guest list,One of your guest can't make it to dinner ,so you need to send out a new set of invitation with a replacement guest.
let unbale = "Ameen";
console.log(`${unbale} can't make it to dinner.`);
//Replace the guest
let newGuest = "Areeba";
guests[guests.indexOf(unbale)] = newGuest;
//New Invitation
guests.forEach(guest => {
    console.log(`Dear ${guest} , would like to join me for dinner?`);
});
//16th question 
//More Guests , you've found a bigger dinner table so , there 's room for more guests
let Guests = ["Aizal", "Sadan", "Rabi", "Sana"];
console.log("Great news i found a bigger dinner table!");
//Adding more guests
Guests.unshift("Sabir");
Guests.splice(Guests.length / 2, 0, "Anum");
Guests.push("Amain");
Guests.forEach(Guests => {
    console.log(`Dear ${Guests}, would you like to join me for dinner?`);
});
//17th question 
//Shrinking guest list , Unfortunately , your new table won't arrive in time , and you can only invite two guests.
console.log("Unfortunatly , i can only invite two people for dinner");
while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`sorry ${removedGuest}, i can't inivte you to dinner.`);
}
;
Guests.forEach(Guests => {
    console.log(`Dear ${Guests}, you're still inivted to dinner.`);
});
Guests.splice(0, Guests.length);
console.log(Guests); //shows an empty list
//19
let invitations = ["Sabir", "Aizal"];
let count_invitations = invitations.length;
console.log(`${invitations} people will come to the dinner`);
export {};
