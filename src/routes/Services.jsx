// import React, { forwardRef } from "react";
// import "./Services.css";
// function Services({ servicesRef }) {
//   return (
//     <>
//       <div ref={servicesRef} className="services-container">
//         {/* <h1>Services page</h1> */}
//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>Spoken English Classes for Seniors:</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Spoken English</h2>
//               <span>
//                 <h4>(for Seniors)</h4>
//               </span>
//               <ul>
//                 <li>Zero Admission Fee</li>
//                 <li>Free Demo Classes</li>
//                 <li>Course Duration: 6 months</li>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹2999/-</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Spoken English</h2>
//               <span>
//                 <h4>(for Seniors)</h4>
//               </span>
//               <ul>
//                 <li>Zero Admission Fee</li>
//                 <li>Free Demo Classes</li>
//                 <li>Course Duration: 6 months</li>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹2999/-</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Spoken English</h2>
//               <span>
//                 <h4>(for Seniors)</h4>
//               </span>
//               <ul>
//                 <li>Zero Admission Fee</li>
//                 <li>Free Demo Classes</li>
//                 <li>Course Duration: 6 months</li>
//                 <li>Sunday</li>
//                 <li>Time: 10:30am to 1:30pm</li>
//                 <li>Course Fee: ₹2999/-</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>Spoken English Classes for Juniors:</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Spoken English</h2>
//               <span>
//                 <h4>(Age Group: 10-15 years)</h4>
//               </span>
//               <ul>
//                 <li>Zero Admission Fee</li>
//                 <li>Free Demo Classes</li>
//                 <li>Course Duration: 6 months</li>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹2999/-</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Spoken English</h2>
//               <span>
//                 <h4>(Age Group: 10-15 years)</h4>
//               </span>
//               <ul>
//                 <li>Zero Admission Fee</li>
//                 <li>Free Demo Classes</li>
//                 <li>Course Duration: 6 months</li>
//                 <li>Sunday</li>
//                 <li>Time: 07:00am to 10:30am</li>
//                 <li>Course Fee: ₹2999/-</li>
//               </ul>
//             </div>
//           </div>
//         </div>

import { getAdapter } from "axios";

//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>CBSE Board</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-5</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-6</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & saturday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-7</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-8</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-9</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-10</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-11</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹350/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-12</h2>
//               <span>
//                 <h4>CBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹350/month</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>ICSE Board</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-5</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-6</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & saturday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-7</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-8</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-9</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-10</h2>
//               <span>
//                 <h4>ICSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>ISC Board</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-11</h2>
//               <span>
//                 <h4>ISC Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹350/-</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-12</h2>
//               <span>
//                 <h4>ISC Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹350/-</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>WBBSE Board</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-5</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30pm to 8pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-6</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30pm to 8:00pm</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-7</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹250/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-8</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-9</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Monday & Thursday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-10</h2>
//               <span>
//                 <h4>WBBSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 6:30am to 8:00am</li>
//                 <li>Course Fee: ₹300/month</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="sub-heading-servicePage">
//           <h1>
//             <i>WBCHSE Board</i>
//           </h1>
//         </div>
//         <div className="service-box-container">
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-11</h2>
//               <span>
//                 <h4>WBCHSE Board</h4>
//               </span>
//               <ul>
//                 <li>Wednessday & Saturday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹350/-</li>
//               </ul>
//             </div>
//           </div>
//           <div className="service-box">
//             <div className="box-container">
//               <h2>Class-12</h2>
//               <span>
//                 <h4>WBCHSE Board</h4>
//               </span>
//               <ul>
//                 <li>Tuesday & Friday</li>
//                 <li>Time: 8:00pm to 9:30pm</li>
//                 <li>Course Fee: ₹350/-</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Services;
// ======================================
// chat get
// ======================================

// import React from "react";
// import "./Services.css";

// // Move this outside so Section can access it
// const renderServiceBox = (title, subtitle, details) => (
//   <div className="service-box">
//     <div className="box-container">
//       <h2>{title}</h2>
//       <span>
//         <h4>{subtitle}</h4>
//       </span>
//       <ul>
//         {details.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// const Section = ({ title, content }) => (
//   <>
//     <div className="sub-heading-servicePage">
//       <h1>
//         <i>{title}</i>
//       </h1>
//     </div>
//     <div className="service-box-container">
//       {content.map(([title, subtitle, details], idx) => (
//         <React.Fragment key={idx}>
//           {renderServiceBox(title, subtitle, details)}
//         </React.Fragment>
//       ))}
//     </div>
//   </>
// );

// function Services({ servicesRef }) {
//   return (
//     <div ref={servicesRef} className="services-container">
//       <Section
//         title="Spoken English Classes for Seniors:"
//         content={[
//           [
//             "Spoken English",
//             "(for Seniors)",
//             [
//               "Zero Admission Fee",
//               "Free Demo Classes",
//               "Course Duration: 6 months",
//               "Monday & Thursday",
//               "Time: 6:30pm to 8pm",
//               "Course Fee: ₹2999/-",
//             ],
//           ],
//           [
//             "Spoken English",
//             "(for Seniors)",
//             [
//               "Zero Admission Fee",
//               "Free Demo Classes",
//               "Course Duration: 6 months",
//               "Tuesday & Friday",
//               "Time: 6:30pm to 8pm",
//               "Course Fee: ₹2999/-",
//             ],
//           ],
//           [
//             "Spoken English",
//             "(for Seniors)",
//             [
//               "Zero Admission Fee",
//               "Free Demo Classes",
//               "Course Duration: 6 months",
//               "Sunday",
//               "Time: 10:30am to 1:30pm",
//               "Course Fee: ₹2999/-",
//             ],
//           ],
//         ]}
//       />

//       <Section
//         title="Spoken English Classes for Juniors:"
//         content={[
//           [
//             "Spoken English",
//             "(Age Group: 10-15 years)",
//             [
//               "Zero Admission Fee",
//               "Free Demo Classes",
//               "Course Duration: 6 months",
//               "Wednesday & Saturday",
//               "Time: 6:30pm to 8pm",
//               "Course Fee: ₹2999/-",
//             ],
//           ],
//           [
//             "Spoken English",
//             "(Age Group: 10-15 years)",
//             [
//               "Zero Admission Fee",
//               "Free Demo Classes",
//               "Course Duration: 6 months",
//               "Sunday",
//               "Time: 07:00am to 10:30am",
//               "Course Fee: ₹2999/-",
//             ],
//           ],
//         ]}
//       />

//       {/* Continue with your other Section blocks here... */}
//     </div>
//   );
// }

// export default Services;

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <div ref={servicesRef} className="services-container">
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
  );
}

export default Services;
