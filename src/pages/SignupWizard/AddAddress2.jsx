// src/pages/SignupWizard/StepAddAddress2.jsx
import { useState } from "react";

export default function StepAddAddress2({ onNext, onBack }) {
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Save to context or localStorage here if needed
    const addressInfo = {
      street,
      apartment,
      city,
      state,
      zip,
    };

    console.log("Saved address info:", addressInfo);
    onNext(); // Go to next screen
  }

  return (
    <div className="pi-overlay">
      <div className="pi-card" style={{ maxWidth: "30rem" }}>
        {/* header */}
        <header className="pi-header">
          <h2 className="pi-title">
            Add address <span className="pi-step">3 of 3</span>
          </h2>
          <button type="button" className="close" onClick={onBack}>
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          {/* street address */}
          <div className="pi-field">
            <input
              type="text"
              placeholder="Street address"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          {/* apartment */}
          <div className="pi-field">
            <input
              type="text"
              placeholder="Apartment"
              value={apartment}
              onChange={(e) => setApartment(e.target.value)}
            />
            <span className="optional">Optional</span>
          </div>

          {/* city */}
          <div className="pi-field">
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* state & zip */}
          <div className="address-row">
            <div className="pi-field address-col">
              <input
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="pi-field address-col">
              <input
                type="text"
                placeholder="Zip code"
                required
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="pi-btn">
            Save information
          </button>
        </form>
      </div>
    </div>
  );
}
