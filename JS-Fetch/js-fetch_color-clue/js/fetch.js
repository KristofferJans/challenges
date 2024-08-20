import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  try {
    const hexCode = getRandomHexCode();
    const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;

    // Use the `fetch()` function to get data from the Color API.//
    // ========================================================= //

    const response = await fetch(colorApiUrl);
    console.log("response", response);

    // Use the `.json()` method to parse the body of the response and convert it into an object.//
    // ========================================================= //

    const responseJSON = await response.json();
    console.log("responseJSON", responseJSON);

    // ========================================================= //

    const colorName = responseJSON.name.value;
    const hexCodeValue = responseJSON.name.closest_named_hex;
    console.log("colorName", colorName);
    console.log("hexCode", hexCodeValue);

    setColorToGuess(hexCodeValue, colorName);
  } catch (error) {
    console.log("Sheeesh! Something wrong happened! - ", error);
  }

  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
}
