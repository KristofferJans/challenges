// # Pixels

// In this challenge we go one dimension higher and will draw pixels from a "2d" array.

// ## Task

// Use the color values in the array `pixelValues` to create "pixel" elements and append them to the `canvas` element.

// - use `for` loops to generate the pixel elements
// - pixels should be a `div` element with the class `pixel` and the background color set to respective color from the `pixelValues` array.
// - You can append all pixels directly to the canvas, no need for extra row grouping etc.
// - Hint: The colors are stored in Arrays inside another Array. How can you access these values with for loops?

for (let values )

const pixelElements = document.createElement("div")
pixelElements.classList.add("pixel")
pixelElements.style.backgroundColor()





console.clear();
const pixelValues = [
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');

for (let i = 1; i <= 5; i++) {
  const starIMG = document.createElement("img");
  starIMG.src = "assets/star-empty.svg";

  starIMG.addEventListener("click", () => {
    renderStars(i);
  });

  // if (i <= filledStars) {
  //   starIMG.src = "assets/star-filled.svg";
  // } else {
  //   starIMG.src = "assets/star-empty.svg";
  // }

  starIMG.src =
    i <= filledStars ? "assets/star-filled.svg" : "assets/star-empty.svg";

  starContainer.append(starIMG);
} //--^-- your code here --^--


for (const languages of programmingLanguages) {
  // console.log(languages);
  const listItem = document.createElement("li");
  listItem.textContent = languages;
  ol.append(listItem);
}

for (const key in languages) {
  console.log(languages[key]);
  const options = document.createElement("option");
  options.textContent = languages[key];
  select.append(options);
}

// --^-- write/change code here --^--

console.log("----------------------");

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (const key in nav) {
  console.log(key);
  const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.textContent = nav[key].text;
  anchorTag.href = nav[key].href;

  listItem.append(anchorTag);
  ul.append(listItem);
}
