import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import "../../styles/signup-wizard.css";

export default function StepEmailPassword({ onNext }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onNext(); // advance to Personal‑Info slide
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="wizard‑overlay">
      <div className="wizard‑card">
        <header className="wizard‑tabs">
          <div>
            <button className="active">Register</button>
            <button disabled>Log in</button>
          </div>
          <span className="close">×</span>
        </header>

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

        <p className="small muted">or register with email</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="form">
          {/* EMAIL FIELD */}
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
            {/* green check icon */}
            <img
              src="https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/check-circle.svg"
              alt=""
              className="icon-right"
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="field">
            <div className="field-content">
              <span className="field-label">Password</span>
              <input
                type={showPwd ? "text" : "password"}
                placeholder="********"
                minLength="8"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* eye toggle */}
            <button
              type="button"
              className="icon-right eye-btn"
              onClick={() => setShowPwd((p) => !p)}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              <img
                src={
                  showPwd
                    ? "https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/eye-slash.svg"
                    : "https://cdn.jsdelivr.net/npm/heroicons@latest/20/solid/eye.svg"
                }
                alt=""
              />
            </button>
          </div>

          <p className="hint">8+ characters</p>

          <button type="submit" className="sumit-button">
            Create account
          </button>

          {/* checkbox row */}
          <label className="news-row">
            <input type="checkbox" />
            <span>Send me news and promotions</span>
          </label>

          <p className="terms">
            By continuing I agree with the&nbsp;
            <a href="/">Terms & Conditions</a>,&nbsp;
            <a href="/">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
}
