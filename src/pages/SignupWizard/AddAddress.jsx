// src/pages/SignupWizard/StepAddAddress.jsx
import { useState } from "react";

export default function StepAddAddress({ onNext, onBack }) {
  const [address, setAddress] = useState("");

  function handleUseCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locationString = `Lat: ${latitude}, Lng: ${longitude}`;
        setAddress(locationString);
        alert(`Location captured:\n${locationString}`);
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  }

  function handleAddManually() {
    onNext("/AddAddress2");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Save address data here if needed
    onNext();
  }

  return (
    <div className="pi-overlay">
      <div className="pi-card">
        {/* header */}
        <header className="pi-header">
          <h2 className="pi-title">
            Add Address <span className="pi-step"> 3 of 3</span>
          </h2>
          <button type="button" className="close" onClick={onBack}>
            ×
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          {/* address input */}
          <div className="pi-field">
            <input
              type="text"
              placeholder="Search for address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <p className="pi-hint">Your address is not visible to other users</p>

          {/* location buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <button
              type="button"
              className="location-btn"
              style={{ width: "48%" }}
              onClick={handleUseCurrentLocation}
            >
              Use current location
            </button>
            <button
              type="button"
              className="location-btn"
              style={{ width: "48%" }}
              onClick={handleAddManually}
            >
              Add manually
            </button>
          </div>

          {/* notes */}
          <h2 className="pi-title" style={{ marginTop: "3rem" }}>
            Sharing your address shows:
          </h2>
          <div className="pi-note">
            <span className="icon">👥</span>
            People near you
          </div>
          <div className="pi-note">
            <span className="icon">⏱️</span>
            Estimated delivery time
          </div>
          <div className="pi-note">
            <span className="icon">💰</span>
            Estimate shipping costs
          </div>
        </form>
      </div>
    </div>
  );
}
