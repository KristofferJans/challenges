import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  // Verwende useState, um den Zustand des Status-Icons zu verwalten
  const [statusIcon, setStatusIcon] = useState("⁉️");

  // Asynchrone Funktion, die den Status der API überprüft
  async function handleCheckApiStatus() {
    /**
     * Hinweis 1:
     * Verwende die `fetch()` Funktion und übergebe `apiStatusUrl` als Argument
     *
     * Hinweis 2:
     * Die fetch-Funktion gibt ein Promise zurück, das zu einem Response-Objekt
     * aufgelöst wird, sobald die Anfrage abgeschlossen ist.
     *
     * Hinweis 3:
     * Das Response-Objekt hat eine `ok`-Eigenschaft, die `true` ist, wenn die
     * Antwort erfolgreich war, und `false`, wenn nicht.
     **/

    // Setzt das Status-Icon auf eine Sanduhr, um anzuzeigen, dass die Überprüfung läuft
    setStatusIcon("⏳");
    try {
      // Führt eine API-Anfrage durch und speichert die Antwort in `response`
      const response = await fetch(apiStatusUrl);
      console.log(response); // Gibt die Antwort in der Konsole aus

      // Überprüft, ob die Antwort erfolgreich war (response.ok)
      // Wenn ja, wird das Icon auf ein Häkchen gesetzt, andernfalls auf ein rotes Kreuz
      response.ok ? setStatusIcon("✅") : setStatusIcon(" ❌");
    } catch (error) {
      // Im Falle eines Fehlers wird das Icon auf ein Warnsymbol gesetzt und der Fehler in der Konsole ausgegeben
      setStatusIcon("🚨");
      console.log("Error found", error);
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        {/* Zeigt das aktuelle Status-Icon an */}
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus} // Verknüpft die Schaltfläche mit der Funktion, die den API-Status überprüft
      >
        Check API Status
      </button>
    </article>
  );
}
