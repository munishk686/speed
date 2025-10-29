import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
 const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      // Update token in app state so navbar shows Logout
      setToken(data.token);

      // Redirect to Add Claim page
      navigate("/AddClaim");
      //
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />{" "}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />{" "}
              </div>
              <button type="submit">Login</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
