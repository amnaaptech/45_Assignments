//45th Question.
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Define a function to create a car object with optional options
function createCar(manufacturer, model, ...options) {
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// Call the function to create a car object
let car1 = createCar("Toyota", "Corolla", "color:blue", "engine:1");
let car2 = createCar("Mercedes", "Mercedes08", "color:black", "engine:1");
// Print the variable to ensure all the information is stored correctly
console.log(car1);
console.log(car2);
export {};
