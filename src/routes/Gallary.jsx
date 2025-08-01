import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { motion } from "framer-motion";

import "yet-another-react-lightbox/styles.css";
import "./Gallary.css";

const images = [
  { src: "/images/1.jpg", title: "Image 1" },
  { src: "/images/2.jpg", title: "Image 2" },
  { src: "/images/3.jpg", title: "Image 3" },
  { src: "/images/4.jpg", title: "Image 4" },
  { src: "/images/5.jpg", title: "Image 5" },
  { src: "/images/6.jpg", title: "Image 6" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between items
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: "easeOut",
    },
  }),
};

const Gallary = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      className="gallery-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img.src}
            alt={img.title}
            className="gallery-image"
            variants={imageVariants}
            custom={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Zoom, Captions, Fullscreen]}
        captions={{ showToggle: true }}
        animation={{ zoom: 250 }}
      />
    </motion.div>
  );
};

export default Gallary;
