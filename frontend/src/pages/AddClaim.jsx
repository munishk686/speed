import React, { useState } from "react";
import styles from "./AddClaim.module.css";


function AddClaim() {
 const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    const [form, setForm] = useState({
    title: "",
    authors: "",
    journal: "",
    year: "",
    volume: "",
    pages: "",
    doi: "",
    claim: "",
    method: "",
    agreeDisagree: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in first.");
      return;
    }

    try {
      const payload = { ...form }; // send all fields
      const res = await fetch(`${API_URL}/api/speeds`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to submit claim");

      alert("Claim submitted successfully!");

      setForm({
        title: "",
        authors: "",
        journal: "",
        year: "",
        volume: "",
        pages: "",
        doi: "",
        claim: "",
        method: "",
        agreeDisagree: "",
      });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
      <h2>Add Claim</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        <input type="text" placeholder="Authors" value={form.authors} onChange={e => setForm({...form, authors: e.target.value})} />
        <input type="text" placeholder="Journal" value={form.journal} onChange={e => setForm({...form, journal: e.target.value})} />
        <input type="text" placeholder="Year" value={form.year} onChange={e => setForm({...form, year: e.target.value})} />
        <input type="text" placeholder="Volume" value={form.volume} onChange={e => setForm({...form, volume: e.target.value})} />
        <input type="text" placeholder="Pages" value={form.pages} onChange={e => setForm({...form, pages: e.target.value})} />
        <input type="text" placeholder="DOI" value={form.doi} onChange={e => setForm({...form, doi: e.target.value})} />
        <textarea placeholder="Claim *" value={form.claim} onChange={e => setForm({...form, claim: e.target.value})} required />
        <input type="text" placeholder="Method" value={form.method} onChange={e => setForm({...form, method: e.target.value})} />
        <input type="text" placeholder="Agree/Disagree" value={form.agreeDisagree} onChange={e => setForm({...form, agreeDisagree: e.target.value})} />
        <button type="submit">Submit Claim</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default AddClaim;
