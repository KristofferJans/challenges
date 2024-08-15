/*## Task

In the `./index.js` file, there is an `animalStrings` array with - 
guess what? - animal names as strings.

Below this array, you will find a couple of variables (e.g. `hippoExists`). 
They all are initialized with `null`.

And now it's your turn: delete the value `null` and write code such that 
the variables have a value corresponding to their name. Use the following 
methods to achieve this goal:

- `Array.includes()`
- `Array.find()`
- `Array.findIndex()`
- `Array.sort()`
- `Array.some()`
- `Array.every()`
- `Array.reduce()`

Additionally, you will need:

- `String.startsWith()`
- `String.endsWith()`

*/

console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("hippoExists? ", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log("catStartingFromIndexFiveExists?", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log("firstAnimalStartingWithLetterP: ", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex(
  (animal) => animal === "giraffe"
);
console.log("indexOfGiraffe:", indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("z")
);

console.log("anyAnimalEndsWithLetterZ?", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(everyAnimalHasMoreThanTwoLetters);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

// Option 1
const sumOfAllAnimalCharacters = animalStrings.reduce(
  (a, b) => a + b.length,
  0
);

console.log(sumOfAllAnimalCharacters);

// Option 2
const sumAnimals = animalStrings
  .map((animal) => {
    return animal.length;
  })
  .reduce((a, b) => a + b);

console.log(sumAnimals);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
