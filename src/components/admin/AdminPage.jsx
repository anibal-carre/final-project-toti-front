import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import "./AdminPage.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const AdminPage = ({ onLogin }) => {
  const [accessCode, setAccessCode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (accessCode === "adca" || accessCode === "secondadmin") {
      setLoggedIn(true);
      onLogin();
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <h2>Admin</h2>
      </div>
      <div>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Ingrese el código de acceso"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPage;
