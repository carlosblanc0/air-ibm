import React, { useState } from "react";
import "./styles.css";


export default function NewWorkplace() {
    const [company, setCompany] = useState('');
    const [branch, setBranch] = useState('');

    function handleSubmit() {
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input
                id="company"
                placeholder="IBM, Kendryl, or Regional Partner (e.g. Century Link)"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />
            <label htmlFor="company">Branch</label>
            <input
                id="branch"
                placeholder="Research, Cloud, or Consulting"
                value={branch}
                onChange={event => setBranch(event.target.value)}
            />
            <button type="submit" className="btn-g">Publish listing</button>
        </form>
    )
}