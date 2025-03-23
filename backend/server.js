
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
