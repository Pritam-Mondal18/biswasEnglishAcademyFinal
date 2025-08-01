// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallary from "./Gallary";
import Review from "./Review";
import Contact from "./Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallary />} />
      <Route path="/review" element={<Review />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
