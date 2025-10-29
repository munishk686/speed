// src/components/BottomNav.jsx
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./BottomNav.css";

export default function BottomNav({ token, setToken }) {
  const navigate = useNavigate();

  // On first load, check if token exists in localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, [setToken]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login"); // redirect to login after logout
  };

  return (
    <div className="bottom-nav">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>

      {!token ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      )}
    </div>
  );
}
