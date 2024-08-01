const mealCost = 20;
const tipPercentage = 0.2;

const tipAmount = mealCost * tipPercentage;
const totalCost = mealCost + tipAmount;

console.log("The price of your meal is: " + mealCost + "€");

console.log("We expect you to tip at least 20%.");

console.log(
  "The total amount of your meal including tip is: " + totalCost + "€"
);
