// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
// import App from "./routes/App";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Header />
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ SEO Provider
import Header from "./components/Header";
import App from "./routes/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
