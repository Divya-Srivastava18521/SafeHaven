// // // import React from "react";
// // // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // // import Home from "./components/Home";
// // // import Contribute from "./components/Contribute";
// // // import MapView from "./components/MapView";
// // // import ContributeData from "./components/ContributeData";



// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/contribute" element={<Contribute />} />
// // //         <Route path="/map" element={<MapView />} />
// // //         <Route path="/contribute" element={<ContributeData />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
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
// //         <Route path="/contribute" element={<Contribute />} /> {/* Only this version */}
// //         <Route path="/map" element={<MapView />} />
// //         <Route path="/contributedata" element={<ContributeData />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Contribute from "./components/Contribute"; 
// import MapView from "./components/MapView";
// import ContributeData from "./components/ContributeData";
// import HeatmapView from "./components/HeatmapView"; 

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contribute" element={<Contribute />} />
//         <Route path="/map" element={<MapView />} />
//         <Route path="/contributedata" element={<ContributeData />} />
//         <Route path="/heatmap" element={<HeatmapView />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Contribute from "./components/Contribute"; 
// import MapView from "./components/MapView";
// import ContributeData from "./components/ContributeData";
// import HeatmapView from "./components/HeatmapView"; 
// import WhyProject from "./components/WhyProject";  // New page for explanation

// function App() {
//   return (
//     <Router>
//       <div className="flex justify-between items-center p-4 bg-gray-800">
//         <h1 className="text-white text-2xl font-bold">SafeHaven</h1>
//         <Link 
//           to="/why-project"
//           className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
//         >
//           Why this project?
//         </Link>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contribute" element={<Contribute />} />
//         <Route path="/map" element={<MapView />} />
//         <Route path="/contributedata" element={<ContributeData />} />
//         <Route path="/heatmap" element={<HeatmapView />} />
//         <Route path="/why-project" element={<WhyProject />} /> {/* New Route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Contribute from "./components/Contribute"; 
// import MapView from "./components/MapView";
// import ContributeData from "./components/ContributeData";
// import HeatmapView from "./components/HeatmapView"; 
// import WhyProject from "./components/WhyProject";  // New page for explanation

// function App() {
//   return (
//     <Router>
//       <div className="flex justify-between items-center p-4 bg-gray-800">
//         <h1 className="text-white text-2xl font-bold">SafeHaven</h1>
//         <Link 
//           to="/why-project"
//           className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg"
//         >
//           Why this project?
//         </Link>
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contribute" element={<Contribute />} />
//         <Route path="/map" element={<MapView />} />
//         <Route path="/contributedata" element={<ContributeData />} />
//         <Route path="/heatmap" element={<HeatmapView />} />
//         <Route path="/why-project" element={<WhyProject />} /> {/* New Route */}
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
import WhyProject from "./components/WhyProject"; // New Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/contributedata" element={<ContributeData />} />
        <Route path="/heatmap" element={<HeatmapView />} />
        <Route path="/WhyProject" element={<WhyProject />} />
      </Routes>
    </Router>
  );
}

export default App;
