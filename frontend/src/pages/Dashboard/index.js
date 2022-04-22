import React, { useEffect, useState } from "react";
import API from "../../services/API";

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
            <header></header>
            <strong>{workplace.company}</strong>
            {/* <span>{workplace.price}</span> */}
          </li>
        ))}
      </ul>
    </>
  );
}
