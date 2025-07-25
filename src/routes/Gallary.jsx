// import "./Gallary.css";
// import React from "react";
// // import Gallary from "react-photo-gallery";
// import ImageGallery from "react-image-gallery";

// // import styles
// // import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";
// // import plugins

// const images = [
//   { src: "/Biswas-English-Academy/images/1.jpg", alt: "1" },
//   { src: "/Biswas-English-Academy/images/2.jpg", alt: "2" },
//   { src: "/Biswas-English-Academy/images/3.jpg", alt: "3" },
//   { src: "/Biswas-English-Academy/images/4.jpg", alt: "4" },
//   { src: "/Biswas-English-Academy/images/5.jpg", alt: "5" },
//   { src: "/Biswas-English-Academy/images/6.jpg", alt: "6" },
// ];

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }

// function Gallary({ gallaryRef }) {
//   const onInit = () => {};
//   return (
//     <>
//       <div ref={gallaryRef} className="gallary-container">
//         {/* <LightGallery
//           onInit={onInit}
//           speed={500}
//           plugins={[
//             lgThumbnail,
//             lgZoom,
//             lgAutoplay,
//             lgFullscreen,
//             lgShare,
//             lgRotate,
//           ]}
//         >
//           {images.map((image, index) => {
//             return (
//               <a href={image.src} key={index}>
//                 <img alt={image.alt} src={image.src} className="gallary" />
//               </a>
//             );
//           })}
//         </LightGallery> */}
//       </div>
//     </>
//   );
// }
// export default Gallary;

// ----------------------------------------------------------------------------------------------------

// import React from "react";
// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import "./Gallary.css";

// const images = [
//   {
//     original: "/Biswas-English-Academy/images/1.jpg",
//     thumbnail: "/Biswas-English-Academy/images/1.jpg",
//     originalAlt: "1",
//     thumbnailAlt: "1",
//     description: "Image 1",
//   },
//   {
//     original: "/Biswas-English-Academy/images/2.jpg",
//     thumbnail: "/Biswas-English-Academy/images/2.jpg",
//     originalAlt: "2",
//     thumbnailAlt: "2",
//     description: "Image 2",
//   },
//   {
//     original: "/Biswas-English-Academy/images/3.jpg",
//     thumbnail: "/Biswas-English-Academy/images/3.jpg",
//     originalAlt: "3",
//     thumbnailAlt: "3",
//     description: "Image 3",
//   },
//   {
//     original: "/Biswas-English-Academy/images/4.jpg",
//     thumbnail: "/Biswas-English-Academy/images/4.jpg",
//     originalAlt: "4",
//     thumbnailAlt: "4",
//     description: "Image 4",
//   },
//   {
//     original: "/Biswas-English-Academy/images/5.jpg",
//     thumbnail: "/Biswas-English-Academy/images/5.jpg",
//     originalAlt: "5",
//     thumbnailAlt: "5",
//     description: "Image 5",
//   },
//   {
//     original: "/Biswas-English-Academy/images/6.jpg",
//     thumbnail: "/Biswas-English-Academy/images/6.jpg",
//     originalAlt: "6",
//     thumbnailAlt: "6",
//     description: "Image 6",
//   },
// ];

// const Gallary = ({ gallaryRef }) => {
//   return (
//     <div ref={gallaryRef} className="gallary-container">
//       <ImageGallery
//         items={images}
//         showPlayButton={true}
//         showFullscreenButton={true}
//         autoPlay={true}
//         slideDuration={500}
//         showThumbnails={true}
//         lazyLoad={true}
//         showBullets={true}
//         additionalClass="custom-gallery"
//       />
//     </div>
//   );
// };

// export default Gallary;
// ======================================================================================================

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";
import "./Gallary.css";

const images = [
  {
    src: "/Biswas-English-Academy/images/1.jpg",
    title: "Image 1",
  },
  {
    src: "/Biswas-English-Academy/images/2.jpg",
    title: "Image 2",
  },
  {
    src: "/Biswas-English-Academy/images/3.jpg",
    title: "Image 3",
  },
  {
    src: "/Biswas-English-Academy/images/4.jpg",
    title: "Image 4",
  },
  {
    src: "/Biswas-English-Academy/images/5.jpg",
    title: "Image 5",
  },
  {
    src: "/Biswas-English-Academy/images/6.jpg",
    title: "Image 6",
  },
];

const Gallary = ({ gallaryRef }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div ref={gallaryRef} className="gallary-container">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.title}
            className="gallery-image"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Zoom, Captions, Fullscreen]}
        captions={{
          showToggle: true, // Show caption toggle button
        }}
        animation={{ zoom: 250 }}
      />
    </div>
  );
};

export default Gallary;
