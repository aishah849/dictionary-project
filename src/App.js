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
          <Dictionary defaultKeyword="hello" />
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
            . Open sourced on{" "}
            <a
              href="https://github.com/aishah849/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://startling-cranachan-53d023.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
