import React, { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const API_URL = import.meta.env.MODE === "production" ? "/api/speeds" : "http://localhost:5000/api/speeds";

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}?search=${query}`);

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error searching");
      setResults(data);
    } catch (err) {
      setResults([]);
      setError(err.message);
    }
  };

  return (
    <div className={styles.searchPage}>
      <h2>Search Claims</h2>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by title, author, or claim..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results.length > 0 && (
        <table border="1" cellPadding="8" >
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Journal</th>
              <th>Year</th>
              <th>Volume</th>
              <th>Pages</th>
              <th>DOI</th>
              <th>Claim</th>
              <th>Method</th>
              <th>Agree/Disagree</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r._id}>
                <td>{r.title}</td>
                <td>{r.authors}</td>
                <td>{r.journal}</td>
                <td>{r.year}</td>
                <td>{r.volume}</td>
                <td>{r.pages}</td>
                <td>{r.doi}</td>
                <td>{r.claim}</td>
                <td>{r.method}</td>
                <td>{r.agreeDisagree}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Search;
