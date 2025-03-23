// import React, { useState } from "react";

// const Contribute = () => {
//   const [formData, setFormData] = useState({ latitude: "", longitude: "", signalStrength: "", notes: "" });

//   const getLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => setFormData({ ...formData, latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
//       (err) => alert("Geolocation error: " + err.message)
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:5000/api/contribute", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });
//     if (res.ok) alert("Data submitted!");
//   };

//   return (
//     <div>
//       <h2>Contribute Data</h2>
//       <button onClick={getLocation}>Get My Location</button>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="latitude" value={formData.latitude} placeholder="Latitude" readOnly />
//         <input type="text" name="longitude" value={formData.longitude} placeholder="Longitude" readOnly />
//         <input type="number" name="signalStrength" placeholder="Signal Strength" onChange={(e) => setFormData({ ...formData, signalStrength: e.target.value })} />
//         <textarea name="notes" placeholder="Notes" onChange={(e) => setFormData({ ...formData, notes: e.target.value })}></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contribute;
import React, { useState } from "react";

const ContributeData = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [signalStrength, setSignalStrength] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Failed to get location. Please enable GPS.");
          setLoading(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!latitude || !longitude || !signalStrength) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = { latitude, longitude, signalStrength, notes };
    console.log("Submitted Data:", formData);

    // TODO: Send data to backend
    alert("Data submitted successfully!");

    // Reset form
    setLatitude("");
    setLongitude("");
    setSignalStrength("");
    setNotes("");
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Data</h2>
      <button
        className="btn location-btn"
        onClick={getLocation}
        disabled={loading}
      >
        {loading ? "Fetching Location..." : "Get My Location"}
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Latitude" value={latitude} readOnly />
        <input type="text" placeholder="Longitude" value={longitude} readOnly />
        <input
          type="number"
          placeholder="Signal Strength (e.g., -85 dBm)"
          value={signalStrength}
          onChange={(e) => setSignalStrength(e.target.value)}
          required
        />
        <textarea
          placeholder="Additional Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit" className="btn submit-btn">
          Submit
        </button>
      </form>

      {/* Enhanced CSS Styling */}
      <style>
        {`
          body {
            background-color: #f4f7fc;
            font-family: 'Arial', sans-serif;
          }
          
          .contribute-container {
            max-width: 450px;
            margin: 30px auto;
            padding: 25px;
            border-radius: 10px;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          h2 {
            margin-bottom: 15px;
            color: #333;
          }

          .btn {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            transition: 0.3s;
          }

          .location-btn {
            background-color: #28a745;
            color: white;
            margin-bottom: 10px;
          }

          .location-btn:hover {
            background-color: #218838;
          }

          .submit-btn {
            background-color: #007bff;
            color: white;
            margin-top: 10px;
          }

          .submit-btn:hover {
            background-color: #0056b3;
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          input, textarea {
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
            width: 100%;
          }

          textarea {
            height: 60px;
            resize: none;
          }

          input[readonly] {
            background: #f1f1f1;
            cursor: not-allowed;
          }

          .btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        `}
      </style>
    </div>
  );
};

export default ContributeData;
