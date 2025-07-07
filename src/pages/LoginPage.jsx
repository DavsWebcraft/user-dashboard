import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import "../styles/signup-wizard.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="wizard‑overlay">
      <div className="wizard‑card">
        {/* Tabs */}
        <header className="wizard‑tabs">
          <div>
            <button onClick={() => navigate("/")}>Register</button>
            <button className="active">Log in</button>
          </div>
          <span className="close" onClick={() => navigate("/")}>
            ×
          </span>
        </header>

        {/* Social Icons */}
        <section className="social‑row">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg"
            alt="Apple"
            className="icon"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
            alt="Facebook"
            className="icon"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg"
            alt="Google"
            className="icon"
          />
        </section>

        <p className="small muted">or login with email</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin} className="form">
          {/* Email Field */}
          <div className="field">
            <div className="field-content">
              <span className="field-label">Email address</span>
              <input
                type="email"
                placeholder="example@mail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <img
              src="https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/check-circle.svg"
              alt=""
              className="icon-right"
            />
          </div>

          {/* Password Field */}
          <div className="field">
            <div className="field-content">
              <span className="field-label">Password</span>
              <input
                type={showPwd ? "text" : "password"}
                placeholder="********"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="icon-right eye-btn"
              onClick={() => setShowPwd((prev) => !prev)}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              <img
                src={
                  showPwd
                    ? "https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/eye-slash.svg"
                    : "https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/eye.svg"
                }
                alt="Toggle password visibility"
              />
            </button>
          </div>

          <button type="submit" className="sumit-button">
            Login to Dashboard
          </button>

          {/* Remember Me */}
          <label className="news-row" style={{ marginTop: "1rem" }}>
            <input type="checkbox" />
            <span>Remember me.</span>
          </label>
        </form>
      </div>
    </div>
  );
}
