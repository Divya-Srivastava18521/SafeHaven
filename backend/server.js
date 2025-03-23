// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const connectDB = require("./db");
// const Contribution = require("./models/Contribution");
// const PORT = process.env.PORT || 5000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// connectDB();

// // Default Route
// app.get("/", (req, res) => {
//   res.send("API is running successfully ");
// });

// // Submit Data
// app.post("/api/contribute", async (req, res) => {
//   try {
//     const { latitude, longitude, signalStrength, notes } = req.body;

//     if (!latitude || !longitude || !signalStrength) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const contribution = new Contribution({ latitude, longitude, signalStrength, notes });

//     await contribution.save();
//     console.log("Saved Contribution:", contribution);  // 🔍 Debug Log
//     res.status(201).json({ message: "Data saved!", data: contribution });

//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });


// // Get All Data
// app.get("/api/contributions", async (req, res) => {
//   try {
//     const contributions = await Contribution.find();
//     res.json(contributions);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


// const express = require("express");
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Serve static files (if needed)
// app.use(express.static("ML/ML"));  

// // Route to run ML model and return heatmap data
// app.get("/api/run-ml", (req, res) => {
//     exec("python backend/ML/ML/ml_model.py", (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Error running ML model: ${stderr}`);
//             return res.status(500).json({ success: false, error: stderr });
//         }

//         // Read the generated heatmap JSON file
//         const dataPath = path.join(__dirname, "backend/ML/ML/heatmap_data.json");
//         fs.readFile(dataPath, "utf8", (err, data) => {
//             if (err) {
//                 console.error("Error reading heatmap data:", err);
//                 return res.status(500).json({ success: false, error: err.message });
//             }

//             res.json({ success: true, data: JSON.parse(data) });
//         });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require("express");
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Serve static files from the backend and frontend
// app.use(express.static(path.join(__dirname, "ML")));
// app.use(express.static(path.join(__dirname, "react-frontend/public")));

// // Route to serve heatmap.html
// app.get("/heatmap", (req, res) => {
//     res.sendFile(path.join(__dirname, "ML/heatmap.html"))
// });

// // Route to run ML model and return heatmap data
// app.get("/api/run-ml", (req, res) => {
//     exec("python ML/ml_model.py", (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Error running ML model: ${stderr}`);
//             return res.status(500).json({ success: false, error: stderr });
//         }

//         // Read the generated heatmap JSON file
//         const dataPath = path.join(__dirname, "ML/heatmap_data.json");
//         fs.readFile(dataPath, "utf8", (err, data) => {
//             if (err) {
//                 console.error("Error reading heatmap data:", err);
//                 return res.status(500).json({ success: false, error: err.message });
//             }

//             res.json({ success: true, data: JSON.parse(data) });
//         });
//     });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Define correct path to ML folder
const ML_PATH = path.join(__dirname, "ML");

// Serve static files from the backend ML folder
app.use(express.static(ML_PATH));

// Route to serve heatmap.html
app.get("/heatmap", (req, res) => {
    res.sendFile(path.join(ML_PATH, "heatmap.html"));
});

// Route to run ML model and return heatmap data
app.get("/api/run-ml", (req, res) => {
    exec("python backend/ML/ml_model.py", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running ML model: ${stderr}`);
            return res.status(500).json({ success: false, error: stderr });
        }

        // Read the generated heatmap JSON file
        const dataPath = path.join(ML_PATH, "heatmap_data.json");
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading heatmap data:", err);
                return res.status(500).json({ success: false, error: err.message });
            }

            res.json({ success: true, data: JSON.parse(data) });
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
