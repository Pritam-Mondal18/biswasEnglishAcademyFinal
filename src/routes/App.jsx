import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Review from "./Review";
import Contact from "./Contact";
import AuthModal from "../components/AuthModal";

const App = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <>
      <Header />

      {/* AnimatePresence enables page transitions */}
      <AnimatePresence mode="wait">
        <Routes
          location={state?.background || location}
          key={state?.background?.pathname || location.pathname}
        >
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />

          {/* Full-page (SEO-friendly) auth routes */}
          <Route path="/login" element={<AuthModal type="login" />} />
          <Route path="/signup" element={<AuthModal type="signup" />} />
        </Routes>
      </AnimatePresence>

      {/* If navigation came from inside the app, show modal overlay */}
      {state?.background && (
        <AnimatePresence>
          <Routes>
            <Route path="/login" element={<AuthModal type="login" isModal />} />
            <Route
              path="/signup"
              element={<AuthModal type="signup" isModal />}
            />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
