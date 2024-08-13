console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

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
}

renderStars(0);
