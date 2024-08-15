/*## Tasks

### Part 1: Filter

Have a look at the `./js/index.js` file: There is a variable `filteredNews` declared with `news.filter()` and a return value `true`.

Your task is to change the filter method:

- filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories`
- don't forget to remove the return statement because you don't need it.

### Part 2: Sort

In the `./js/index.js` file, you will find another variable called `sortedNews` 
declared with the value of `filteredNews`.

Use the sort method to sort all filtered cards by the length of their body text.
*/
import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) => {
  return card.categories.includes("politics");
});

// Part 2 - Option 1
const sortedNews = filteredNews.sort((a, b) => {
  if (a.body.length < b.body.length) {
    return -1;
  }
  if (a.body.length > b.body.length) {
    return 1;
  }
  return 0;
});

// Part 2 - Option 2
// const sortedNews = filteredNews.sort(function (a, b) {
//   return a.body.length - b.body.length;
// });

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
