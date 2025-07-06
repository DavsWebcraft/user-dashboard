import { useState } from "react";

export default function StepPersonalInfo({ onNext, onBack }) {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [countryCode, setCountryCode] = useState("+598");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const personalInfo = {
      fullName,
      gender,
      phone: countryCode + phone,
      birthday,
    };
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));

    onNext();
  }

  function handlePhoneChange(e) {
    const value = e.target.value;
    // Only allow numbers
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setError("");
    } else {
      setError("Please enter numbers only");
    }
  }

  return (
    <div className="pi-overlay">
      <div className="pi-card">
        {/* header */}
        <header className="pi-header">
          <h2 className="pi-title">
            Personal information <span className="pi-step">2 of 3</span>
          </h2>
          <button type="button" className="close" onClick={onBack}>
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          {/* full name */}
          <div className="pi-field">
            <input
              type="text"
              placeholder="Full name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* gender */}
          <div className="pi-radio-group">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>

          {/* note */}
          <p className="pi-note">
            <span className="icon">ℹ</span>
            The phone number and birthday are only visible to you
          </p>

          {/* phone */}
          <div className="pi-field">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+598">+598</option>
              <option value="+234">+234</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          {error && (
            <p
              className="error"
              style={{ color: "red", marginTop: "-1rem", fontSize: "0.875rem" }}
            >
              {error}
            </p>
          )}

          {/* birthday */}
          <div className="pi-field">
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
            <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>Optional</span>
          </div>
          <p className="pi-hint">
            Let us know about your birthday so as not to miss a gift
          </p>

          <button type="submit" className="pi-btn">
            Save information
          </button>
        </form>
      </div>
    </div>
  );
}
