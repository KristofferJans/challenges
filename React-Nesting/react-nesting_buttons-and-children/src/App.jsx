import "./App.css";

export default function App() {
  return (
    <main>
      <Button>I like turtles!</Button>
      <Button>I like trains!</Button>
      <Button>This is a button!</Button>
      <Button>This is also a button!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
