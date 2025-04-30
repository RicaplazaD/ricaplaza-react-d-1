import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Account = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sample stored credentials (mock authentication)
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      if (rememberMe) {
        localStorage.setItem("rememberMe", email);
      }
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Container className="auth-container">
      <div className="auth-box">
        <h2 className="text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3 d-flex align-items-center">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </Container>
  );
};

export default Account; 

