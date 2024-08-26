import "./App.css";

export default function App() {
  return <Button text="sheesh" color="blue" />;
}

function Button({ color, disabled, text }) {
  return (
    <div>
      <button {...(disabled ? isDisabled : "")} style={{ color: color }}>
        {text}
      </button>
    </div>
  );
}
