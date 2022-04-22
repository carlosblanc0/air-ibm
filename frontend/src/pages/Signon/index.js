import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/API";

export default function Signin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await API.post("/auth", {
      email: email,
    });
    const { _id } = response.data;

    localStorage.setItem("user", _id);
    navigate("/dashboard");
  }
  return (
    <>
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
    </>
  );
}
