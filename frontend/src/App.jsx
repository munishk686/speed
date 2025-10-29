// src/App.js
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Navbar from "./components/BottomNav";
import AddClaim from "./pages/AddClaim";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <>
      {/* Wrap all content in one container */}
      <div style={{ paddingBottom: "60px" }}>
        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/AddClaim" element={<AddClaim />} />
        </Routes>
      </div>

      {/* Navbar fixed at bottom — visible on all pages */}
      <Navbar token={token} setToken={setToken} />
    </>
  );
}

export default App;
