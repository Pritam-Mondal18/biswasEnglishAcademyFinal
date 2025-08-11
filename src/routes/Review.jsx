import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "./Review.css";

function Review({ reviewRef }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="review-page">
      <motion.section
        ref={reviewRef}
        className="review-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
          className="elfsight-app-9806db2a-012d-4423-9503-12f04faf6b61"
          data-elfsight-app-lazy
        ></div>
      </motion.section>
      <Footer />
    </div>
  );
}

export default Review;
