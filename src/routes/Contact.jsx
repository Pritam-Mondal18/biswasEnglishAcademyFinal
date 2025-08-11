import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaHome, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_Default_Template,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => alert("Message sent successfully!"))
      .catch((error) => alert("Failed to send message: " + error.text));
  };

  return (
    <>
      <div className="contact-container">
        <motion.div
          className="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="contact-Social">
            <motion.div
              className="detailes"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://maps.app.goo.gl/EHPM36NnWUgL2mF79"
                className="icon"
              >
                <FaHome />
              </a>
              <h3>Address</h3>
              <p>80 Laxmipally, Rishra, Hooghly, West Bengal, India</p>
            </motion.div>

            <motion.div
              className="detailes"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="mailto:atanu92.biswas@gmail.com" className="icon">
                <IoIosMail />
              </a>
              <h3>Email</h3>
              <p>atanu92.biswas@gmail.com</p>
            </motion.div>

            <motion.div
              className="detailes"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href="tel:+917059904029" className="icon">
                <FaPhone />
              </a>
              <h3>Phone</h3>
              <p>+91 7059904029</p>
            </motion.div>

            <motion.div
              className="detailes-icon"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://www.facebook.com/AtanuBiswasCC/"
                className="icon facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7059904029&text=Hello!"
                className="icon whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/biswas_english_academy/"
                className="icon insta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@Biswas_English_Academy"
                className="icon youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="contact-Map"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1669492879546!2d88.3373443!3d22.7220353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b3815689f15%3A0x8ffa65a5fb97e85c!2sBiswas%20English%20Academy!5e0!3m2!1sen!2sin!4v1730216544062!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Biswas English Academy Location"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/images/man.jpg"
            alt="Representative"
            className="man-img"
            whileHover={{ scale: 1.03 }}
          />
          <motion.div
            className="contact-form-info"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input type="text" name="address" placeholder="Address" />
              <input
                type="tel"
                name="contactnumber"
                placeholder="Contact Number"
                pattern="[0-9]{10}"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
