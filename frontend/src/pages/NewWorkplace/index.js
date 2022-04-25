import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import API from "../../services/API";
import upload from "../../assets/upload.svg";
import "./styles.css";

export default function NewWorkplace(history) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");
  const thumbnailPreview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    const user_id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("branch", branch);

    await API.post("/workplace", data, {
      headers: { user_id },
    });

    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${thumbnailPreview})` }}
        className={thumbnailPreview ? `has-thumbnail` : ""}
      >
        <input
          type="file"
          onChange={(event) => setThumbnail(event.target.files[0])}
        />
        <img src={upload} alt="Carbon Design - Upload icon" />
      </label>
      <label htmlFor="company">Company</label>
      <input
        id="company"
        placeholder="IBM, Kendryl, or Regional Partner (e.g. Century Link)"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />
      <label htmlFor="company">Branch</label>
      <input
        id="branch"
        placeholder="Research, Cloud, or Consulting"
        value={branch}
        onChange={(event) => setBranch(event.target.value)}
      />
      <Link to="/dashboard">
      <button type="submit" className="btn-g">
        Publish listing
      </button>
      </Link>
    </form>
  );
}
