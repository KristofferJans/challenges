import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting name="Kiki" />
      <Greeting name="Jan" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>{name === `Jan` ? `Hello, Coach!` : `Hello, ${name}!`}</h1>;
}
