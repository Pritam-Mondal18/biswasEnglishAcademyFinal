// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./routes/App.jsx";
// import Home from "./routes/Home.jsx";
// import "./index.css";
// import About from "./routes/About.jsx";
// import Contact from "./routes/Contact.jsx";
// // import Gallary from "./routes/Gallary.jsx";
// import Review from "./routes/Review.jsx";
// import Services from "./routes/Services.jsx";

// // import "bootstrap/dist/css/bootstrap.css";

// const router = createBrowserRouter([
//   {
//     // path: "/Biswas-English-Academy",
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       // {
//       //   path: "gallary",
//       //   element: <Gallary />,
//       // },
//       {
//         path: "review",
//         element: <Review />,
//       },
//       {
//         path: "services",
//         element: <Services />,
//       },
//     ],
//   },
//   // {
//   //   path: "/Biswas-English-Academy",
//   //   element: <App />,
//   // },
//   // {
//   //   path: "*",
//   //   element: <NotFoundPage />,
//   // },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {" "}
//     <RouterProvider router={router} />{" "}
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
// import App from "./routes/App";
import App from "./routes/App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
