const mongoose = require("mongoose");

const ContributionSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  signalStrength: Number,
  notes: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contribution", ContributionSchema);
