import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:80/Nutrition_AI/backend/public/index.php/login",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      login({ username, isAdmin: true });
      window.location.href = "/admin-dashboard";
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="login">
        <div className="login__box">
          <div className="login__title-wrapper">
            <h1 className="login__title">Welcome back!</h1>
          </div>
          <h3 className="login__subtitle">Username</h3>
          <input
            className="login__input username-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <h3 className="login__subtitle">Password</h3>
          <input
            className="login__input password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login__button-wrapper">
            <button className="login__button" onClick={handleLogin}>
              Login
            </button>
          </div>
          {error && <div className="login__error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default LoginForm;
