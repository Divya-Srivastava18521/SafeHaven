// import React from "react";

// const HeatmapView = () => {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <iframe
//         src=""
//         title="Heatmap"
//         width="100%"
//         height="100%"
//         style={{ border: "none" }}
//       ></iframe>
//     </div>
//   );
// };

// export default HeatmapView;


import React from "react";

const HeatmapView = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="http://localhost:5000/heatmap" // Calls the backend to fetch heatmap.html
        title="Heatmap"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default HeatmapView;
