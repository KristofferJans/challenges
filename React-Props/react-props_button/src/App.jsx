import "./App.css";

function Button({ color = `red`, disabled, text, onClick }) {
  return (
    <div>
      <button disabled={disabled} style={{ color: color }} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default function App() {
  function handleClick() {
    console.log("Sheesh you clicked me!");
  }
  return (
    <Button
      text="sheesh"
      color="blue"
      disabled={false}
      //onClick={() => alert("You clicked me!")}
      onClick={handleClick}
    />
  );
}
