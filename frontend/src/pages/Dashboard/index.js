import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/API";
import "./styles.css";

export default function Dashboard() {
  const [workplace, setWorkplace] = useState([]);
  useEffect(() => {
    async function loadWorkplace() {
      const user_id = localStorage.getItem("user");
      const response = await API.get("/dashboard", {
        headers: { user_id },
      });
      setWorkplace(response.data);
    }
    loadWorkplace();
  }, []);

  return (
    <>
      <ul className="workplace-list">
        {workplace.map((workplace) => (
          <li key={workplace._id}>
            <header
              style={{ backgroundImage: `url(${workplace.thumbnail_url})` }}
            ></header>
            <strong>{workplace.company}</strong>
            {/* <span>{workplace.price ? `U${workplace.price}/day : `TBA`}</span> */}
          </li>
        ))}
      </ul>
      <Link to="/newworkplace">
        <button className="btn">Create a new listing</button>
      </Link>
    </>
  );
}
