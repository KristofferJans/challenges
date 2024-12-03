console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const textInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  textInput.value = textInput.value.toUpperCase();
  console.log(textInput.value);
});

/* <body>
    <form class="form">
      <label for="first-input">First Input:</label>
      <input
        id="first-input"
        class="form__input"
        type="text"
        data-js="first-input"
        aria-describedby="help-text"
      />
      <p id="help-text">Type something to test your code.</p>
      <button type="button" data-js="button-uppercase">&uarr;</button>
    </form>
    <script src="./js/index.js" defer></script>
  </body> */
