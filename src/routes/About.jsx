import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <motion.div
        className="about-img"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/images/roadmap.jpg"
          alt="About Biswas Academy"
          className="roadmap"
        />
      </motion.div>

      <motion.div
        className="about-paragraph"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <p className="paragraph about">
          <strong>BISWAS ENGLISH ACADEMY</strong> was established in 2013 and is
          a government-registered and ISO 9001:2015 certified institution
          dedicated to transforming lives through the power of the English
          language. Located in the heart of Rishra, Hooghly district, West
          Bengal, we’ve served the community for over a decade with the mission
          to help individuals overcome their struggles with English and unlock
          their full potential.
          <br />
          <br />
          Our expert faculty offer personalized instruction tailored to each
          student's needs—whether it's spoken fluency or academic English
          success. We specialize in classes for teens, adults, homemakers,
          professionals, and school students (5th–12th standard, all boards).
          <br />
          <br />
          When you choose BISWAS ENGLISH ACADEMY, you're choosing excellence,
          experience, and educators who care deeply about your success.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
