import React from "react";
import BottomNav from "../components/BottomNav";
import { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={styles.appContainer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <h2>Register</h2>
          <form>
            <div>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
