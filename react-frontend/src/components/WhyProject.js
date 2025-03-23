// import React from "react";

// const WhyProject = () => {
//   return (
//     <div style={styles.heroSection}>
//   <h1 style={styles.heroHeading}>Why This Project?</h1>
//   <p style={styles.heroText}>
//     The world depends on honeybees. Without them, our food systems, ecosystems, and economies could collapse.
//   </p>
// </div>

//     <div style={styles.container}>
//       <h1 style={styles.heading}>Why This Project Matters</h1>
//       <p style={styles.subheading}>If honeybees go extinct, the consequences would be catastrophic.</p>
      
//       <div style={styles.section}>
//         <h2 style={styles.title}>🌍 Food Production Collapse</h2>
//         <ul style={styles.list}>
//           <li><strong>Pollination Crisis:</strong> 75% of global crops rely on pollinators like bees.</li>
//           <li><strong>Global Food Shortages:</strong> Over $235 billion in crops depend on pollinators.</li>
//           <li><strong>Meat & Dairy Impact:</strong> Livestock depends on bee-pollinated plants.</li>
//         </ul>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>🌱 Ecosystem Collapse</h2>
//         <ul style={styles.list}>
//           <li><strong>Biodiversity Decline:</strong> 90% of wild plants rely on pollinators.</li>
//           <li><strong>Bird & Insect Extinction:</strong> Many species depend on bee-pollinated plants.</li>
//         </ul>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>💰 Economic & Agricultural Disaster</h2>
//         <ul style={styles.list}>
//           <li><strong>Massive Economic Loss:</strong> A world without bees could cost $500B+ annually.</li>
//           <li><strong>Human Labor Pollination:</strong> Farmers in China already hand-pollinate crops.</li>
//         </ul>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>🌎 Climate & Environmental Impact</h2>
//         <ul style={styles.list}>
//           <li><strong>Loss of Carbon Absorption:</strong> Forest decline accelerates climate change.</li>
//           <li><strong>Soil Erosion:</strong> Without vegetation, lands become uninhabitable.</li>
//         </ul>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>🔬 What Studies Say</h2>
//         <p>According to the UN, 40% of pollinator species are at risk of extinction.</p>
//         <p>A study in <strong>Nature Communications (2019)</strong> warned that bee declines could reduce crop yields by up to 30%.</p>
//         <p>Greenpeace warns bees could disappear within decades without urgent conservation.</p>
//       </div>

//       <div style={styles.section}>
//         <h2 style={styles.title}>💡 Final Thought</h2>
//         <p><em>"If the bee disappeared off the face of the Earth, man would have only four years left to live."</em> – Einstein (unverified, but powerful)</p>
//         <p>Protecting bees isn't just about saving a species—it’s about securing our future.</p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "800px",
//     margin: "auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     color: "#333",
//     textAlign: "center",
//   },
//   heading: { fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" },
//   subheading: { fontSize: "1.2rem", marginBottom: "20px", fontStyle: "italic" },
//   section: { marginBottom: "20px", textAlign: "left" },
//   title: { fontSize: "1.5rem", color: "#2E8B57", fontWeight: "bold" },
//   list: { listStyleType: "disc", paddingLeft: "20px" },
//   heroSection: {
//     textAlign: "center",
//     padding: "50px 20px",
//     background: "linear-gradient(to right, #2c3e50, #27ae60)",
//     color: "white",
//     borderRadius: "10px",
//     marginBottom: "20px",
//   },
//   heroHeading: {
//     fontSize: "2.8rem",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   },
//   heroText: {
//     fontSize: "1.5rem",
//     maxWidth: "700px",
//     margin: "auto",
//   },
  
// };

// export default WhyProject;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSeedling, FaGlobe, FaExclamationTriangle, FaLeaf } from "react-icons/fa";

function WhyProject() {
  const navigate = useNavigate();
  const [beeDeaths, setBeeDeaths] = useState(0);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Start real-time counter
    const interval = setInterval(() => {
      setBeeDeaths((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      
      {/* 🌟 Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroHeading}>Why This Project?</h1>
        <p style={styles.heroText}>
          The world depends on honeybees. Without them, our food systems, ecosystems, and economies could collapse.
        </p>
      </div>

      {/* 🕰️ Live Bee Death Counter */}
      <div style={styles.counterSection}>
        <h2>Bees Lost Since You Opened This Page: <strong>{beeDeaths}</strong></h2>
      </div>

      {/* 🌍 Project Details */}
      <div data-aos="fade-up" style={styles.content}>
        
        <h2 style={styles.subheading}><FaSeedling /> 1. Food Production Collapse</h2>
        <p>Pollinators like bees ensure global food security. Without them, crop production would fall drastically.</p>

        <h2 style={styles.subheading}><FaGlobe /> 2. Ecosystem Collapse</h2>
        <p>Bees support biodiversity by helping plants reproduce. Their extinction would trigger a chain reaction in nature.</p>

        <h2 style={styles.subheading}><FaExclamationTriangle /> 3. Economic & Agricultural Disaster</h2>
        <p>Crop failures could cost the world over $500 billion annually, making food scarce and expensive.</p>

        <h2 style={styles.subheading}><FaLeaf /> 4. Climate & Environmental Impact</h2>
        <p>Forests and vegetation rely on pollination. Without bees, carbon absorption would decline, worsening climate change.</p>
      </div>

      {/* 🌱 Call to Action */}
      <div style={styles.ctaSection}>
        <h2>What Can You Do?</h2>
        <p>Join us in protecting pollinators by contributing data and spreading awareness.</p>
        <button style={styles.ctaButton} onClick={() => navigate("/contribute")}>
          Contribute Data
        </button>
      </div>
      
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heroSection: {
    textAlign: "center",
    padding: "50px 20px",
    background: "linear-gradient(to right, #2c3e50, #27ae60)",
    color: "white",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  heroHeading: {
    fontSize: "2.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  heroText: {
    fontSize: "1.5rem",
    maxWidth: "700px",
    margin: "auto",
  },
  counterSection: {
    textAlign: "center",
    fontSize: "1.3rem",
    color: "#c0392b",
    fontWeight: "bold",
    marginTop: "20px",
  },
  content: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
  },
  subheading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
    marginTop: "20px",
  },
  ctaSection: {
    textAlign: "center",
    backgroundColor: "#eafaf1",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  },
  ctaButton: {
    padding: "10px 15px",
    backgroundColor: "#27ae60",
    color: "white",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s",
  },
  ctaButtonHover: {
    backgroundColor: "#1e8449",
  },
};

export default WhyProject;
