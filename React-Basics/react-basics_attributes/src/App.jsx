import "./App.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Text of my choice!</h2>

      <label htmlFor="article__input">Use the input!</label>
      <input id="article__input" type="text" placeholder="use me!" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Butterbrot"
      >
        Here you can learn about german Butterbrot!
      </a>
    </article>
  );
}
