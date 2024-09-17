// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", printMessage = "I Love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
//calling a function with by defualt value
make_shirt();
//calling  a function now with Medium size and defualt message
make_shirt("Medium");
//calling  a function now with Small size and also diiferent Print message
make_shirt("Small", "I Love Python");
export {};
