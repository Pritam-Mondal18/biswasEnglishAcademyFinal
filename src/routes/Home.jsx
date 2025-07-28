// import React, { forwardRef, useState, useRef, useEffect } from "react";
// import Model from "react-modal";
// import "./Home.css";
// import { FaBusinessTime } from "react-icons/fa";
// // import { IoMdClose } from "react-icons/io";
// import { RxCross2 } from "react-icons/rx";
// import { PiStudentFill } from "react-icons/pi";
// import CountUp from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
// import emailjs from "@emailjs/browser";

// Model.setAppElement("#root");

// function Home({ homeRef }) {
//   const [counterStart, setcounterStart] = useState(false);
//   //handle form section
//   const [formVisible, setformVisible] = useState(true);

//   //handle form section using emailJS
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_Default_Template,
//         form.current,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           alert("Email has sent Succesfully!");
//         },
//         (error) => {
//           alert("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <>
//       <div ref={homeRef} className="home-container">
//         {/* Start form section */}
//         {/* Modal for the first-time form */}
//         <Model
//           isOpen={formVisible}
//           // style={{
//           //   content: {
//           //     margin: "100px",
//           //     width: "50vw",
//           //     height: "70vh",
//           //     backgroundColor: "#ced8ff",
//           //     alignContent: "center",
//           //     cursor: "pointer",
//           //     zIndex: "1",
//           //   },
//           // }}
//         >
//           <RxCross2
//             className="closeForm"
//             onClick={() => setformVisible(false)}
//           />
//           <div className="contact-from-info">
//             {/* <RxCross2
//               className="closeForm"
//               onClick={() => setformVisible(false)}
//             /> */}
//             <h2>Get In Touch</h2>
//             <form ref={form} onSubmit={sendEmail}>
//               <label>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   name="name"
//                   required
//                 />
//               </label>
//               <label>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   name="email"
//                   required
//                 />
//               </label>
//               <label>
//                 <input type="text" placeholder="Address" name="address" />
//               </label>
//               <label>
//                 <input
//                   type="tel"
//                   placeholder="Contact Number"
//                   name="contactnumber"
//                   pattern="[0-9]{10}" // Adjust as needed for validation
//                   required
//                 />
//               </label>
//               <label>
//                 <textarea name="message" placeholder="Message" required />
//               </label>
//               <button type="submit" value="send">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </Model>
//         {/* End form section */}
//         {/* attached banner */}
//         <div className="banner">
//           {" "}
//           <img src="/images/banner.jpg" alt="" className="banner-img" />
//         </div>
//         {/* give a heading */}
//         <div className="home-heading">
//           <div className="home-heading-text">
//             <h1>
//               <i>
//                 <b>Welcome to BISWAS ENGLISH ACADEMY </b>
//               </i>
//             </h1>
//             <span className="sub-heading">
//               – Your Gateway to Mastering the English Language!
//             </span>
//           </div>
//         </div>
//         <div className="paragraph-home">
//           <span className="paragraph">
//             At BISWAS ENGLISH ACADEMY, we believe that language is the bridge to
//             endless opportunities. career, or excel in academics, our carefully
//             crafted English courses cater to every learner’s needs. Are you a
//             teen preparing for the future? A professional aiming to impress? A
//             homemaker ready to conquer new horizons? Or a student striving for
//             academic excellence? You’ve come to the right place. Our dynamic
//             spoken English programs for teens, adults, homemakers, and
//             professionals are designed to give you the confidence and skillset
//             to thrive in today’s fast-paced world. For students from 5th to 12th
//             standard, our academic English classes ensure that you’re not just
//             learning to pass exams but mastering the language for life. We
//             support you through every stage of your learning journey, building
//             the foundation for a bright future. Step into a world where learning
//             English is not just about grammar and vocabulary—it’s about empower-
//             ment, growth, and transformation. Let’s embark on this journey
//             together, where each lesson brings you closer to success, and every
//             word you speak becomes a stepping stone
//             <br /> toward your goals.
//           </span>
//           <span className="animation">
//             <div className="numberAnimation">
//               <div className="animationIcon">
//                 <FaBusinessTime className="icons" />
//               </div>
//               <ScrollTrigger
//                 onEnter={() => setcounterStart(true)}
//                 onExit={() => setcounterStart(false)}
//                 threshold={0.1}
//               >
//                 <div className="animationText">
//                   <h2>Experience</h2>
//                   <h4 className="scrollNumber">
//                     {counterStart && (
//                       <CountUp
//                         start={0}
//                         end={11}
//                         duration={2}
//                         delay={0}
//                       ></CountUp>
//                     )}
//                     Years+
//                   </h4>
//                 </div>
//               </ScrollTrigger>
//             </div>
//             <div className="numberAnimation">
//               <div className="animationIcon">
//                 <PiStudentFill className="icons" />
//               </div>
//               <ScrollTrigger
//                 onEnter={() => setcounterStart(true)}
//                 onExit={() => setcounterStart(false)}
//                 threshold={0.1}
//               >
//                 <div className="animationText">
//                   <h2>Students</h2>
//                   <h4 className="scrollNumber">
//                     {counterStart && (
//                       <CountUp
//                         start={0}
//                         end={15}
//                         duration={2}
//                         delay={0}
//                       ></CountUp>
//                     )}
//                     K+
//                   </h4>
//                 </div>
//               </ScrollTrigger>
//             </div>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }
// // export default forwardRef(Home);
// export default Home;
/*
===================================================
chat gpt
===================================================*/

// Home.jsx;
// // Home.jsx;
// import React from "react";
// import { motion } from "framer-motion";
// import "./Home.css";

// const Home = ({ homeRef }) => {
//   return (
//     <section ref={homeRef} className="home-container">
//       <div className="banner-wrapper">
//         <img
//           src="/images/banner.jpg"
//           alt="Biswas English Academy Banner"
//           className="banner-img"
//         />
//       </div>

//       <div className="home-content-wrapper">
//         <motion.div
//           className="home-content"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="home-heading"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Welcome to Biswas English Academy
//           </motion.h1>
//           <motion.p
//             className="home-subtext"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Elevate your English skills with expert guidance and personalized
//             instruction.
//           </motion.p>
//           <motion.a
//             href="#contact"
//             className="cta-button"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             Get Started
//           </motion.a>
//         </motion.div>

//         <motion.div
//           className="home-image-wrapper"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           <img
//             src="/images/pm1.jpg"
//             alt="Students learning English"
//             className="home-image"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>

//       <motion.div
//         className="scroll-indicator"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           delay: 1.2,
//           duration: 0.5,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         ↓
//       </motion.div>
//     </section>
//   );
// };

// export default Home;
// ============================================================================
/*
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = ({ homeRef }) => {
  return (
    <section ref={homeRef} className="home-container">
      <div className="banner-wrapper">
        <img
          src="/images/banner.jpg"
          alt="Biswas English Academy Banner"
          className="banner-img"
        />
      </div>

      <div className="home-content-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="home-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Biswas English Academy
          </motion.h1>

          {/* Fixed-height container to prevent layout shift */
{
  /* <div className="typing-wrapper">
            <TypeAnimation
              sequence={[
                "Elevate your English skills with expert guidance and personalized instruction.",
                2000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="home-subtext typing-text"
            />
          </div> */
} /*
          <div className="typing-wrapper">
            <span className="home-subtext">
              Elevate your English skills with{" "}
              <TypeAnimation
                sequence={[
                  "expert guidance and personalized instruction.",
                  2000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </span>
          </div>

          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src="/images/pm1.jpg"
            alt="Students learning English"
            className="home-image"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Home;
*/
/*
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";

const Home = ({ homeRef }) => {
  return (
    <section ref={homeRef} className="home-container">
      <div className="banner-wrapper">
        <img
          src="/images/banner.jpg"
          alt="Biswas English Academy Banner"
          className="banner-img"
        />
      </div>

      <div className="home-content-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="home-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Biswas English Academy
          </motion.h1>

          {/* 👇 Side-by-side layout for static + animated text 
          <div className="typing-wrapper-row">
            <span className="home-subtext fixed-line">
              Elevate your English skills with&nbsp;
            </span>
            <span className="home-subtext typing-text">
              <TypeAnimation
                sequence={[
                  "expert guidance and personalized instruction.",
                  2000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src="/images/pm1.jpg"
            alt="Students learning English"
            className="home-image"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Home;
*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FaBusinessTime } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import "./Home.css";

const Home = ({ homeRef }) => {
  const [counterStart, setcounterStart] = useState(false);

  return (
    <section ref={homeRef} className="home-container">
      <div className="banner-wrapper">
        <img
          src="/images/banner.jpg"
          alt="Biswas English Academy Banner"
          className="banner-img"
        />
      </div>

      <div className="home-content-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="home-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to Biswas English Academy
          </motion.h1>

          <div className="typing-wrapper-row">
            <span className="fixed-line">
              Elevate your English skills with&nbsp;
            </span>
            <span className="home-subtext">
              <TypeAnimation
                sequence={[
                  "expert guidance and personalized instruction.",
                  2000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </span>
          </div>

          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src="/images/pm1.jpg"
            alt="Students learning English"
            className="home-image"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Animated Experience and Students Count */}
      <span className="animation">
        <motion.div
          className="numberAnimation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="animationIcon">
            <FaBusinessTime className="icons" />
          </div>
          <ScrollTrigger
            onEnter={() => setcounterStart(true)}
            onExit={() => setcounterStart(false)}
            threshold={0.1}
          >
            <div className="animationText">
              <h2>Experience</h2>
              <h4 className="scrollNumber">
                {counterStart && (
                  <CountUp start={0} end={11} duration={2} delay={0} />
                )}
                Years+
              </h4>
            </div>
          </ScrollTrigger>
        </motion.div>

        <motion.div
          className="numberAnimation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="animationIcon">
            <PiStudentFill className="icons" />
          </div>
          <ScrollTrigger
            onEnter={() => setcounterStart(true)}
            onExit={() => setcounterStart(false)}
            threshold={0.1}
          >
            <div className="animationText">
              <h2>Students</h2>
              <h4 className="scrollNumber">
                {counterStart && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
                K+
              </h4>
            </div>
          </ScrollTrigger>
        </motion.div>
      </span>
    </section>
  );
};

export default Home;
