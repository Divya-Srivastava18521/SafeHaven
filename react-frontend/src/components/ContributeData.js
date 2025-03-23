import React, { useState } from "react";
import "./Contribute.css";

const API_KEY = "pk.1f853542f09feaeae1db0378027eb8ac";

const ContributeData = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [signalStrength, setSignalStrength] = useState("");
  const [notes, setNotes] = useState("");
  const [towers, setTowers] = useState([]); // Store tower data

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLatitude(lat);
          setLongitude(lon);
          fetchCellTowers(lat, lon);
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Fetch nearby cell towers
  const fetchCellTowers = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://opencellid.org/cell/get?ke=${API_KEY}&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      console.log("Fetched Tower Data:", data);
  
      if (data && data.cells) {
        setTowers(data.cells);
      } else {
        setTowers([]);
        alert("No cell towers found nearby.");
      }
    } catch (error) {
      console.error("Error fetching cell tower data:", error);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!latitude || !longitude || !signalStrength) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = { latitude, longitude, signalStrength, notes, towers };
    console.log("Submitted Data:", formData);

    alert("Data submitted successfully!");
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Data</h2>
      <button className="btn" onClick={getLocation}>
        Get My Location
      </button>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Signal Strength"
          value={signalStrength}
          onChange={(e) => setSignalStrength(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {/* Display Cell Tower Info */}
      {towers.length > 0 && (
        <div className="tower-info">
          <h3>Nearby Cell Towers</h3>
          <ul>
            {towers.map((tower, index) => (
              <li key={index}>
                Tower ID: {tower.cellId}, Signal: {tower.signal} dBm
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContributeData;
