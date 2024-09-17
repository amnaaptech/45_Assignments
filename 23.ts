//23th Question
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';

//Test 1 : Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');// true statement


//Test 2 : Equality (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true statement


//Test 3 : inequality (false)
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); // false statement


//Test 4 : inequality  (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); // false statement


//Test: 5 less than comparison (false)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); //false statement comparision


//Test: 6 less than comparison (false)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); //false statement comparision 


//Test: 7 less than or equal to comparison (true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru'); //true statement comparision


//Test: 8 less than or equal to comparison (true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru'); //true statement comparision


//Test: 9 checking truthiness (true)
console.log("Is car? I predict true.");
console.log(!!car); // true (non-empty string is truthy)


//Test: 10 checking truthiness (false)
console.log("Is !car? I predict false.");
console.log(!car); // false (negation of a truthy value)