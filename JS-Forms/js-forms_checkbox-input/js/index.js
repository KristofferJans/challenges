// # Checkbox Input

// TOS is short for Terms of Service. Here, the `alert()` in the submit
// event handler should only be called if the `tos` checkbox has been checked.

// > 💡 You can use an early `return;` in an if statement to prevent the
// `alert()` from being called.

// In addition, the error message below the checkbox should only be
// displayed if the checkbox is unchecked. The message should disappear
// as soon as the user checks the checkbox - and it should reappear as soon as
// the user unchecks the checkbox. Use the given functions `showTosError()` and
// `hideTosError()`.

// Can you make the error message hidden initially (before the form is submitted)?

// ## Bonus: Success message

// Add this HTML code to the [`index.html`](./index.html) below the form.
// Write JavaScript code to only show the div if the submission was valid
// (`tos` checkbox was checked). Like the error message, it should also be
// hidden initially.

// ```html
// <div data-js="success" class="success">Complaint successfully submitted!</div>
// ```

console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  successMessage.removeAttribute("hidden");
}

function hideSuccess() {
  successMessage.setAttribute("hidden", "");
}

hideTosError();
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  tos = formElements.tos.checked;

  if (!tos) {
    showTosError();
    return;
  }
  showSuccess();
  alert("Form submitted!");
  //form.reset();
});

tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    return;
  }
  showTosError();
});
