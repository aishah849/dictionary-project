import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://sg.linkedin.com/in/aishah-al-rashid-a4403015b"
              target="_blank"
              rel="noreferrer"
            >
              Aishah Al-Rashid
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
