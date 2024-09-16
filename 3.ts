//3rd question
//Name case:  store a personal's name in a veriable, and then print that person;s name in lowercase, uppercase and titlecase
//UPPER CASE
let personsName:string = ("Amna Sheikh");
console.log("UpperCase:" , personsName.toUpperCase());
// lower case 
console.log("lowerCase:" , personsName.toLowerCase());
//Title case
let sentenceSplitted : string[] = personsName.split(" ");
console.log(sentenceSplitted);
//loop
for (let i = 0; i < sentenceSplitted.length; i++) {
    let character = sentenceSplitted[i]
 console.log(character)
 sentenceSplitted [i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
 
}
console.log(sentenceSplitted)
    