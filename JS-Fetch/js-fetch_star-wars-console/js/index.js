// ## Task

// Have a look at the `./js/index.js` file: There is an `url`
// variable and an empty `fetchData()` function.

// Inside of the `fetchData()` function, use the `url` variable
// to fetch data from the Star Wars API.

// Log the fetched data to the console and play around with it:

// - log the entire data object
// - log different values of the data object
// - Bonus: Can you log the eye color of R2-D2?

// The following hints may guide you:

// - use a `try...catch` block
// - make sure to wait for all asynchronous operations
// - make sure to handle bad responses from the API as well
// - you can test bad responses via adding a random string of characters
// to the end of the URL stored in the url variable

console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    console.log("response", response);

    if (!response.ok) {
      // If there is an ERROR
      console.error("Bad Response", response.status);
      return;
    }

    const responseJSON = await response.json();
    console.log("responseJSON", responseJSON);

    console.log("R2-D2´s Eye Color:", responseJSON.results[2].eye_color);

    console.log(
      "Luke Skywalkers Eye Color:",
      responseJSON.results[0].eye_color
    );

    console.log("Darth Vader´s Mass: ", responseJSON.results[3].mass);
  } catch (error) {
    console.log("Something wrong happened! - ", error);
  }
}

fetchData();
