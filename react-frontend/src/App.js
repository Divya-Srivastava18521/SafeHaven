
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contribute from "./components/Contribute";
import MapView from "./components/MapView";
import ContributeData from "./components/ContributeData";
import HeatmapView from "./components/HeatmapView";
import WhyProject from "./components/WhyProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/contributedata" element={<ContributeData />} />
        <Route path="/heatmap" element={<HeatmapView />} />
        <Route path="/WhyProject"element={<WhyProject />} />
      </Routes>
    </Router>
  );
}

export default App;
