import React, { useState } from "react";
import API from "./services/API";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await API.post("/auth", {
      email: email,
    });
  }

  return (
    <div className="container">
      <img src={logo} alt="company logo" />
      <div className="content">
        <p>
          Find IBM locations <strong>worldwide</strong>, with links to workplace{" "}
          <strong>information</strong> and local facility services.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Sign in with your w3id credentials</label>
          <input
            type="email"
            id="email"
            placeholder="IBM email address (e.g. jdoe@ibm.com)"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <button className="btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
