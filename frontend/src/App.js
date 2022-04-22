import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="company logo" />
      <div className="content">
        <p>
          Find IBM locations <strong>worldwide</strong>, with links to workplace{" "}
          <strong>information</strong> and local facility services.
        </p>
        <form>
          <label htmlFor="email">Sign in with your w3id credentials</label>
          <input
            type="email"
            id="email"
            placeholder="IBM email address (e.g. jdoe@ibm.com)"
          />
          <button className="btn" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default App;
