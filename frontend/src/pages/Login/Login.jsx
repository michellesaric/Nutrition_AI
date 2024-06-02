import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext"; // Make sure this path is correct

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
      const userData = response.data; // Assuming backend returns user data
      login({ username, isAdmin: true }); // Set the user data
      window.location.href = "/admin-dashboard";
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginForm;
