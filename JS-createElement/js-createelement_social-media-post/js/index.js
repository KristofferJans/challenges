// ## Task

// This page shows an example of a social media post. Your task is to replicate the social
// media post with JavaScript. Use `document.createElement()` to generate all HTML elements separately.

// Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of
// `document.createElement()` instead.

// The `index.html` demonstrates the required HTML tags, structure and class names.

// Append the second social media post to the body. Don't forget to add the event listener
// to the like button. You can use the function `handleLikeButtonClick` for the event listener.

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const socialMediaPost = document.createElement("section");
socialMediaPost.classList.add("post");

const postText = document.createElement("p");
postText.classList.add("post__content");
postText.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@username";

const postButton = document.createElement("button");
postButton.classList.add("post__button");
postButton.type = "button";
postButton.setAttribute("data-js", "like-button");
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);

socialMediaPost.append(postText);
socialMediaPost.append(postFooter);
postFooter.append(postUsername);
postFooter.append(postButton);
document.body.append(socialMediaPost);
