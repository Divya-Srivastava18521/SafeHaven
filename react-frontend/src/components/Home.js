
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle sharing
  const shareOnPlatform = (platform) => {
    const shareText =
      "Check out SafeHaven, an AI-powered wildlife signal mapper! 🌿🔍 #SafeHaven #WildlifeConservation";

    let url = "";
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=https://safehaven.com`;
        break;
      case "instagram":
        url = `https://www.instagram.com/`;
        break;
      case "github":
        url = `https://github.com/Divya-Srivastava18521/SafeHaven/tree/main`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
    setShowMenu(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      {/* Spread Awareness Button */}
      <button style={styles.spreadButton} onClick={() => setShowMenu(!showMenu)}>
        Spread Awareness
      </button>

      {/* Popup Social Menu */}
      {showMenu && (
        <div style={styles.popupMenu} onMouseLeave={() => setShowMenu(false)}>
          <button style={styles.menuItem} onClick={() => shareOnPlatform("twitter")}>
            Twitter
          </button>
          <button style={styles.menuItem} onClick={() => shareOnPlatform("facebook")}>
            Facebook
          </button>
          <button style={styles.menuItem} onClick={() => shareOnPlatform("instagram")}>
            Instagram
          </button>
          <button style={styles.menuItem} onClick={() => shareOnPlatform("github")}>
            GitHub
          </button>
        </div>
      )}

      {/* Why This Project Button */}
      <button style={styles.whyButton} onClick={() => navigate("/WhyProject")}>
        Why This Project?
      </button>

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

// Styles Object
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    textAlign: "center",
    position: "relative",
    backgroundImage: "url('/images/img1.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "contrast(1.2) brightness(1.1)",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    zIndex: 2,
  },
  description: {
    fontSize: "1.2rem",
    color: "white",
    marginBottom: "20px",
    zIndex: 2,
  },
  buttonContainer: {
    display: "flex",
    gap: "15px",
    zIndex: 2,
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#f4a261",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "0.3s",
  },
  whyButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "12px 20px",
    fontSize: "1rem",
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    zIndex: 2,
  },
  spreadButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "12px 20px",
    fontSize: "1rem",
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    zIndex: 2,
  },
  popupMenu: {
    position: "absolute",
    top: "60px",
    left: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
  },
  menuItem: {
    backgroundColor: "transparent",
    border: "none",
    padding: "10px",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "left",
    transition: "0.3s",
  },
};

export default Home;
