import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

import "./Footer.css";

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="footer-container">
        {/* SOCIAL LINKS */}
        <motion.div
          className="social-links-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img src="/images/logoFinal.png" alt="Logo" className="logo" />
          <h4>
            <b>
              <i>Biswas English Academy</i>
            </b>
          </h4>
          <p>
            Welcome to <i>Biswas English Academy</i> where excellence in English
            education meets to decades of unwavering dedication.
          </p>
          <div className="social-links">
            <div className="facebook">
              <a
                href="https://www.facebook.com/AtanuBiswasCC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
            </div>
            <div className="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=7059904029&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="icon" />
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/biswas_english_academy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/@Biswas_English_Academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* CONTACT DETAILS */}
        <motion.div
          className="contact-details"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4>
            <i>ADDRESS</i>
          </h4>
          <div className="adress-details">
            <div className="icon-map">
              <GrMap />
            </div>
            <p>80 Laxmipally, Rishra, Hooghly, WB, India</p>
          </div>
          <div className="contact-number-details">
            <div className="icon-map">
              <FaPhoneVolume />
            </div>
            <p>+91 7059904029</p>
          </div>
          <div className="email-details">
            <div className="icon-map">
              <TfiEmail />
            </div>
            <p>biswasenglishacademy@gmail.com</p>
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          className="courses"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4>
            <i>SERVICES</i>
          </h4>
          <div className="course">
            <ul>
              <li>Spoken English Classes for Seniors & Juniors</li>
              <li>CBSE Board (class-5 to class-12)</li>
              <li>ICSE Board (class-5 to class-10)</li>
              <li>ISC Board (class-11 to class-12)</li>
              <li>WBBSE Board (class-5 to class-10)</li>
              <li>WBCHSE Board (class-11 to class-12)</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* FOOTER END LINE */}
      <motion.div
        className="end-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p>Copyright © 2024 biswasenglishacademy.com</p>
      </motion.div>
    </>
  );
};

export default Footer;
