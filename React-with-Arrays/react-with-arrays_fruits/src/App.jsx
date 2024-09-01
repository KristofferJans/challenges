import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 3,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 4,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 5,
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
