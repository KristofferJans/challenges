// ## Hints

// - Use the variable names given in the task to destructure the given object.
// - The value can correspond to a simple data type as well as to an object.
// - Make sure to export the variable you have declared in order to make the tests work.
// - If you want to check whether you solved the tasks correctly,
// run the test following the steps described on "Local Development".

console.clear();

// EXERCISE 1
// Extract only the course name from the company object.
// Make sure to export your variable/function as in the example below to make the tests work.

const company = {
  name: "Spiced Academy",
  course: "Web Development",
  location: "Berlin",
};

//const { course } = company;

export const { course } = company;

// EXERCISE 2
// We have an object called 'user'.
// Write the destructuring assignment that reads:
//  2.1: 'name' property into the variable 'name'.
//  2.2: 'years' property into the variable 'age'.
//  2.3: 'isAdmin' property into the variable 'isAdmin' (false, if no such property exists)

const user = { name: "John", years: 30 };
export const { name, years: age, isAdmin = false } = user;

console.log("name: ", name);
console.log("age: ", age);
console.log("isAdmin? ", isAdmin);

// EXERCISE 3
// Extract the variables from the dog object and
// rename them like "dogName", "dogBreed", and "dogAge", respectively.

const dog = {
  name: "Pluto",
  breed: "husky",
  age: 5,
};

export const { name: dogName, breed: dogBreed, age: dogAge } = dog;
console.log("dogName: ", dogName);
console.log("dogBreed: ", dogBreed);
console.log("dogAge: ", dogAge);

// EXERCISE 4
// Extract the 'lastName' property from the person object as "personLastName".
// Store all other properties in an object called "moreInformation".

const person = {
  lastName: "Main",
  age: 24,
  firstName: "Alex",
};

export const { lastName: personLastName, ...moreInformation } = person;
console.log("personLastName: ", personLastName);
console.log("moreInformation: ", moreInformation);

// EXERCISE 5
// Rewrite the following function (logInfo) to use destructuring assignment for the three variables it creates:

const logInfo = (city) => {
  const name = city.name;
  const country = city.country;
  const numPeople = city.population;

  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`;
};

export const destructuringLogInfo = (city) => {
  // (Hint: Lines 48-50 should be replaced with a single line and you shouldn't change anything else).
  // your code here
  const { name, country, population: numPeople } = city;

  // your code here
  return `${name} is in ${country} and has ${numPeople} inhabitants in it.`;
};

// This is how you would call it:
destructuringLogInfo({
  name: "Marseille",
  country: "France",
  population: 861635,
});
