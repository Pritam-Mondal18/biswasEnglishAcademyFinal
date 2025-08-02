import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import "./Services.css";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServiceBox = ({ title, subtitle, details, index }) => (
  <motion.div
    className="service-box"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInVariant}
    whileHover={{ scale: 1.03 }}
  >
    <div className="box-content">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <ul>
        {details.map((item, idx) => (
          <li key={idx}>
            <motion.span
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaCheckCircle className="icon" />
            </motion.span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Section = ({ title, content }) => (
  <motion.section
    className="service-section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInVariant}
  >
    <div className="section-heading">
      <h1>
        <i>{title}</i>
      </h1>
    </div>
    <div className="service-grid">
      {content.map(([title, subtitle, details], idx) => (
        <ServiceBox
          key={idx}
          title={title}
          subtitle={subtitle}
          details={details}
          index={idx}
        />
      ))}
    </div>
  </motion.section>
);

function Services({ servicesRef }) {
  return (
    <>
      <div className="services-container">
        <Section
          title="Spoken English Classes for Seniors:"
          content={[
            [
              "Spoken English",
              "(for Seniors)",
              [
                "Zero Admission Fee",
                "Free Demo Classes",
                "Course Duration: 6 months",
                "Monday & Thursday",
                "Time: 6:30pm to 8pm",
                "Course Fee: ₹2999/-",
              ],
            ],
            [
              "Spoken English",
              "(for Seniors)",
              [
                "Zero Admission Fee",
                "Free Demo Classes",
                "Course Duration: 6 months",
                "Tuesday & Friday",
                "Time: 6:30pm to 8pm",
                "Course Fee: ₹2999/-",
              ],
            ],
            [
              "Spoken English",
              "(for Seniors)",
              [
                "Zero Admission Fee",
                "Free Demo Classes",
                "Course Duration: 6 months",
                "Sunday",
                "Time: 10:30am to 1:30pm",
                "Course Fee: ₹2999/-",
              ],
            ],
          ]}
        />

        <Section
          title="Spoken English Classes for Juniors:"
          content={[
            [
              "Spoken English",
              "(Age Group: 10-15 years)",
              [
                "Zero Admission Fee",
                "Free Demo Classes",
                "Course Duration: 6 months",
                "Wednesday & Saturday",
                "Time: 6:30pm to 8pm",
                "Course Fee: ₹2999/-",
              ],
            ],
            [
              "Spoken English",
              "(Age Group: 10-15 years)",
              [
                "Zero Admission Fee",
                "Free Demo Classes",
                "Course Duration: 6 months",
                "Sunday",
                "Time: 07:00am to 10:30am",
                "Course Fee: ₹2999/-",
              ],
            ],
          ]}
        />
      </div>
      <Footer />
    </>
  );
}

export default Services;
