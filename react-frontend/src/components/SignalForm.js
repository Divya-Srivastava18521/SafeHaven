// import React, { useState } from "react";
// import "./SignalForm.css"; // Importing CSS file for styling

// export default function SignalForm() {
//   const [location, setLocation] = useState("");
//   const [signalStrength, setSignalStrength] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", { location, signalStrength });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//       <h2>Submit Signal Data</h2>
//       <input
//         type="text"
//         placeholder="Location (Latitude, Longitude)"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="input-field"
//       />
//       <input
//         type="number"
//         placeholder="Signal Strength (dBm)"
//         value={signalStrength}
//         onChange={(e) => setSignalStrength(e.target.value)}
//         className="input-field"
//       />
//       <button type="submit" className="submit-button">Submit</button>
//     </form>
//   );
// }
