// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Home from "./components/Home";
// // import Contribute from "./components/Contribute";
// // import MapView from "./components/MapView";
// // import ContributeData from "./components/ContributeData";



// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/contribute" element={<Contribute />} />
// //         <Route path="/map" element={<MapView />} />
// //         <Route path="/contribute" element={<ContributeData />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Contribute from "./components/Contribute"; 
// import MapView from "./components/MapView";
// import ContributeData from "./components/ContributeData";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contribute" element={<Contribute />} /> {/* Only this version */}
//         <Route path="/map" element={<MapView />} />
//         <Route path="/contributedata" element={<ContributeData />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contribute from "./components/Contribute"; 
import MapView from "./components/MapView";
import ContributeData from "./components/ContributeData";
import HeatmapView from "./components/HeatmapView"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/contributedata" element={<ContributeData />} />
        <Route path="/heatmap" element={<HeatmapView />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;

