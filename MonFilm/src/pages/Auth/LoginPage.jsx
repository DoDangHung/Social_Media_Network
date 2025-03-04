/** @format */

import React, { useState } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../Components/services/userService";
import { addUser } from "../../Components/services/userService";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleRegister = async (username, email, password) => {
    try {
      const res = await addUser(username, email, password);
      console.log(res.data, "data");
      return res.data;
    } catch (err) {
      setError("Registration failed!");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        const data = await handleLogin(email, password);
        console.log("Login successful:", data);
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("username", data.username);
          navigate("/homepage");
        } else {
          throw new Error("No token in response.");
        }
      } else {
        const username = email.split("@")[0];
        const data = await handleRegister(username, email, password);
        if (data && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("username", data.username);
        } else {
          throw new Error("No token in response.");
        }

        navigate("/homepage");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(
        isLogin ? "Your account does not exist!" : "Registration failed!"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-screen">
      <div className="login-modal">
        <div className="login-img">
          <img className="logo" src="/mfslogo.webp" />
        </div>
        <div className="login-form">
          <h4>Sign in to continue</h4>
          <span>
            Log in to enjoy quality content without ads or annoying bookmakers.
          </span>
          <form className="login-main" onSubmit={onSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-login"
                placeholder="Email address"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-login"
                placeholder="Password"
                required
              />
              {error && (
                <p className="error" style={{ color: "red" }}>
                  {error}
                </p>
              )}
              <div className="">
                <button className="btn-login" type="submit" disabled={loading}>
                  {loading
                    ? isLogin
                      ? "Processing login..."
                      : "Processing register..."
                    : isLogin
                    ? "Sign In"
                    : "Sign up"}
                </button>
                <div className="divider">
                  <span>or</span>
                </div>
                <button
                  style={{ backgroundColor: "#c7dff7" }}
                  className="btn-login"
                  type="submit"
                >
                  <span>
                    <img className="svg-google" src="/icon-google.svg" />
                  </span>
                  <p style={{ paddingLeft: "10px" }}>Sign in Google</p>
                </button>
                <button className="btn-baw" type="submit">
                  <span>Sign in BAW#ID</span>
                </button>

                <div className="register">
                  <a
                    href=""
                    className="btn-register"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLogin(false);
                    }}
                  >
                    Create new account
                  </a>
                  <a href="" className="btn-forgot">
                    Forgot password
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
