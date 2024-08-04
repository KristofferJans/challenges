console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("light");
  bodyElement.classList.add("dark");
  console.log("switched to dark mode");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  bodyElement.classList.add("light");
  console.log("switched to light mode");
});

toggleModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("switched to toggle mode");
});
