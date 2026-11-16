import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleIncrease = () => setCount((c) => c + 1);

  const handleDecrease = () => setCount((c) => Math.max(0, c - 1));

  const handleReset = () => setCount(0);
  const toggleInfo = () => setShowInfo((v) => !v);
  const toggleTheme = () => setIsDark((v) => !v);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <main className="panel">
        <h1>Counter</h1>

        <p className="count" aria-live="polite">
          {count}
        </p>

        <div className="actions">
          <button onClick={handleDecrease} disabled={count === 0}>
            Decrease
          </button>
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleReset} className="secondary">
            Reset
          </button>
        </div>

        {count === 0 && <p className="hint">The counter can't go below zero.</p>}

        <hr />

        <h2>Settings</h2>
        <div className="actions">
          <button onClick={toggleInfo} className="secondary">
            {showInfo ? "Hide information" : "Show information"}
          </button>
          <button onClick={toggleTheme} className="secondary">
            Switch to {isDark ? "light" : "dark"} mode
          </button>
        </div>

        {showInfo && (
          <section className="info">
            <p>
              This counter is built with React state. Each button calls a
              handler that updates state, and React re-renders the screen.
            </p>
            <p>
              Current mode: <strong>{isDark ? "Dark" : "Light"}</strong>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}