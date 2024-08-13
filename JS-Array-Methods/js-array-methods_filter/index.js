/*# Array Methods: `filter`

Here are some exercises to recap the array method `filter`. Let's dive directly into it!

## Task

In the `./index.js` file, there is a `cards` array with three objects.

Below this array, you will find a couple of variables (e.g. `onlyCardsWithTagHTML`). 
They are all initialized with `null`.

And now it's your turn: delete the value `null` and write code such that the variables 
have a value corresponding to their name. Use `filter` to achieve this goal.
*/

console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];
/*
const onlyCardWithIdTwo = cards.filter((card) => {
  if (card.id === "2") {
    return true;
  }
  return false;
});
*/

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});

//console.log(onlyCardWithIdTwo.length);
//console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});

//console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return !card.isBookmarked;
});

console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    card.isBookmarked &&
    (card.tags.includes("html") || card.tags.includes("js"))
  );
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
