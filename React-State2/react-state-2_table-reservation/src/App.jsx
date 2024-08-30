import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function increasePeople() {
    setPeople(people + 1);
  }

  function decreasePeople() {
    if (people > 0) {
      setPeople(people - 1);
    }
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrease={increasePeople} onDecrease={decreasePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
