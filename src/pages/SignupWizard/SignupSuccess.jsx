// src/pages/SignupWizard/SignupSuccess.jsx
import { useNavigate } from "react-router-dom";

export default function SignupSuccess() {
  const navigate = useNavigate();

  function handleGoToLogin() {
    navigate("/login"); // Adjust route as needed
  }

  return (
    <div className="pi-overlay" style={{ backgroundColor: "#fbfbfb" }}>
      <div
        className="pi-card"
        style={{
          padding: "0",
          maxWidth: "90%",
          width: "25rem",
          overflow: "hidden",
        }}
      >
        {/* Illustration */}
        <div
          style={{
            backgroundColor: "#ffeef8",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/Success.png"
            alt="Success illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Success Message */}
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "2rem",
              color: "#1d1d1d",
            }}
          >
            You are successfully registered!
          </h2>

          <button
            className="pi-btn"
            style={{ maxWidth: "100%", padding: "1rem 2rem" }}
            onClick={handleGoToLogin}
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
}
