import { useState, useEffect } from "react"; // React-Hooks werden importiert
import Controls from "./components/Controls"; // Import der Controls-Komponente
import Map from "./components/Map"; // Import der Map-Komponente
import "./App.css"; // Import der CSS-Datei für Styles

// Konstante URL zur API, die die Koordinaten der ISS liefert
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  // useState-Hook wird verwendet, um den Zustand der Koordinaten (Längengrad und Breitengrad) zu speichern
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Asynchrone Funktion zum Abrufen der ISS-Koordinaten von der API
  async function getISSCoords() {
    try {
      const response = await fetch(URL); // API-Anfrage an die URL
      const data = await response.json(); // Antwort wird in JSON umgewandelt

      // Aktualisieren der Koordinaten im Zustand mit den Werten aus der API-Antwort
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (error) {
      console.log(error); // Fehlerbehandlung: Fehler wird in der Konsole ausgegeben
    }
  }

  // useEffect-Hook, der nach dem ersten Rendern der Komponente ausgeführt wird
  useEffect(() => {
    getISSCoords(); // Ruft die ISS-Koordinaten sofort beim ersten Rendern ab
    const intervalID = setInterval(getISSCoords, 5000); // Setzt ein Intervall, um die Koordinaten alle 5 Sekunden zu aktualisieren
    clearInterval(intervalID); // Hier wird das Intervall sofort wieder gelöscht (dieser Schritt scheint hier nicht korrekt zu sein)
  }, []); // Der leere Abhängigkeitsarray sorgt dafür, dass der Effekt nur einmal beim ersten Rendern ausgeführt wird

  return (
    <main>
      {/* Map-Komponente wird gerendert und erhält die aktuellen Koordinaten als Props */}
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      {/* Controls-Komponente wird gerendert und erhält die Koordinaten sowie eine onRefresh-Funktion als Props */}
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
