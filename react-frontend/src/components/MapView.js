// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapView = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/contributions")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <MapContainer center={[20, 78]} zoom={5} style={{ height: "500px", width: "100%" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {data.map((entry, index) => (
//         <Marker key={index} position={[entry.latitude, entry.longitude]}>
//           <Popup>
//             Signal Strength: {entry.signalStrength} <br />
//             Notes: {entry.notes}
//           </Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// };

// export default MapView;
import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // Fixes hidden tile rendering
    }, 100);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapContainer
        center={[20.5937, 78.9629]} // Centered in India
        zoom={5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default MapView;

