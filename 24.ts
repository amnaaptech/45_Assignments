//24th Question
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


//define variables
let Name = "Amna";
let abc = "ALPABATES";
let number1 = 50;
let number2 = 100;
let veg = ["Lemon" , "Broccoli" , "Cabbage" , "Radish" , " Garlic"]


// Tests for equality and inequality with strings
console.log(Name == "Amna"); //true

console.log("\n Name is not person Name?")
console.log(Name != "Amna"); //false


// • Tests using the lower case function
console.log("This ALPABATES is equal to alpabates to lower case?")
console.log(abc.toLowerCase() == "alpabates");//true

console.log("This ALPABATES is  not equal to alpabates to lower case?")
console.log(abc.toLowerCase() != "alpabates");//false


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n Is fifty is equal to hundred?")
console.log(number1 == number2); //false 

console.log("\n Is fifty is  not equal to hundred?")
console.log(number1 != number2); //false 


//Grater than
console.log("\n Is hundred is greater than fifty?")
console.log(number2 > number1); //true


//less than
console.log("\n Fifty is less than hundred?")
console.log(number1 > number2); //false

//greater than or equal to 
console.log("Is hundred is greater than or equal to fifty?");
console.log(number2 >= number1); //false


// //less than or equal to 
console.log("Is hundred is less than or equal to fifty?");
console.log(number2 <= 50 ); //false



// • Tests using "and" and "or" operators
//using  && operator
console.log("\n Hundred is not equal to fifty , and hundred is greater than fifty")
console.log(number2 != number1 && number2 > number1);//true

console.log("\n Hundred is not equal to fifty , and hundred is less than fifty")
console.log(number2 != number1 && number2 < number1);//false


//using || (OR) operator!
console.log("\n  Is fifty is greater than hundred , OR hundred is equal to hundred?")
console.log(50 > 100 || 100 == 100);//true

console.log("\n  Is fifty is greater than hundred , OR hundred is equal to hundred?")
console.log(50 > 100 || 100 != 100);//false


// • Test whether an item is in a array
console.log("\n Is Broccoli is include in my veg array ");
console.log(veg.includes("Broccoli"));//true


console.log("\n Is Broccoli is not include in my veg array ");
console.log(!veg.includes("Broccoli"));//true

