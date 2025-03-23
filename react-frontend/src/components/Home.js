// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Welcome to SafeHaven</h1>
//       <p style={styles.description}>
//         Discover low electromagnetic signal areas for birds and pollinators.
//       </p>
      
//       {/* Buttons */}
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={() => navigate("/contribute")}>
//           Contribute Data
//         </button>
//         <button style={styles.button} onClick={() => navigate("/map")}>
//           View Map
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh", // Full height of the viewport
//     textAlign: "center",
//   },
//   heading: { fontSize: "2rem", fontWeight: "bold" },
//   description: { fontSize: "1.2rem", marginBottom: "20px" },
//   buttonContainer: { display: "flex", gap: "15px" },
//   button: {
//     padding: "10px 20px",
//     fontSize: "1rem",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//     borderRadius: "5px",
//   },
// };

// export default Home;
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to SafeHaven</h1>
      <p style={styles.description}>
        Discover low electromagnetic signal areas for birds and pollinators.
      </p>
      
      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/contribute")}>
          Contribute Data
        </button>
        <button style={styles.button} onClick={() => navigate("/map")}>
          View Map
        </button>
        <button style={styles.button} onClick={() => navigate("/heatmap")}>
          View Heatmap
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: { fontSize: "2rem", fontWeight: "bold" },
  description: { fontSize: "1.2rem", marginBottom: "20px" },
  buttonContainer: { display: "flex", gap: "15px" },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Home;
