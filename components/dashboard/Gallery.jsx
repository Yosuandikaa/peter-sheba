import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";

const Gallery = ({ images }) => {
  useEffect(() => {
    // Inisialisasi AOS.js setelah komponen dimount
    import("aos").then((aos) => {
      aos.init({
        duration: 900, // durasi animasi
        once: false, // animasi hanya terjadi sekali
        easing: "ease-in-out", // jenis animasi
      });
    });
  }, []);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setLightboxIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col gap-4 py-12 px-3 md:px-5" id="gallery">
      <div
        className="flex flex-col items-center mb-4"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-3xl md:text-4xl font-bold font-brush">Our Gallery</h3>
        <span className="font-light text-sm">Momen momen kami.</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            style={{
              cursor: "pointer",
              margin: "5px",
              width: image.width,
              height: image.height,
            }}
            className="rounded-xl object-cover"
            onClick={() => openLightbox(index)}
            data-aos="zoom-in"
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <React.Fragment>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999999,
            }}
          >
            <img
              src={images[lightboxIndex].src}
              alt={`Gallery Image ${lightboxIndex + 1}`}
              style={{
                maxWidth: "90%",
                // maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <button
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                cursor: "pointer",
              }}
              className="bg-white w-8 h-8 rounded-full flex items-center justify-center"
              onClick={closeLightbox}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.892 0.302021C12.7995 0.209317 12.6896 0.135769 12.5686 0.085588C12.4477 0.0354065 12.318 0.00957632 12.187 0.00957632C12.0561 0.00957632 11.9264 0.0354065 11.8054 0.085588C11.6844 0.135769 11.5745 0.209317 11.482 0.302021L6.59202 5.18202L1.70202 0.29202C1.60944 0.199438 1.49953 0.125998 1.37856 0.0758934C1.2576 0.0257884 1.12795 9.75509e-10 0.997021 0C0.86609 -9.75509e-10 0.736441 0.0257884 0.615477 0.0758934C0.494513 0.125998 0.384602 0.199438 0.29202 0.29202C0.199438 0.384602 0.125998 0.494513 0.0758934 0.615477C0.0257884 0.736441 -9.75509e-10 0.86609 0 0.997021C9.75509e-10 1.12795 0.0257884 1.2576 0.0758934 1.37856C0.125998 1.49953 0.199438 1.60944 0.29202 1.70202L5.18202 6.59202L0.29202 11.482C0.199438 11.5746 0.125998 11.6845 0.0758934 11.8055C0.0257884 11.9264 0 12.0561 0 12.187C0 12.3179 0.0257884 12.4476 0.0758934 12.5686C0.125998 12.6895 0.199438 12.7994 0.29202 12.892C0.384602 12.9846 0.494513 13.058 0.615477 13.1081C0.736441 13.1583 0.86609 13.184 0.997021 13.184C1.12795 13.184 1.2576 13.1583 1.37856 13.1081C1.49953 13.058 1.60944 12.9846 1.70202 12.892L6.59202 8.00202L11.482 12.892C11.5746 12.9846 11.6845 13.058 11.8055 13.1081C11.9264 13.1583 12.0561 13.184 12.187 13.184C12.3179 13.184 12.4476 13.1583 12.5686 13.1081C12.6895 13.058 12.7994 12.9846 12.892 12.892C12.9846 12.7994 13.058 12.6895 13.1081 12.5686C13.1583 12.4476 13.184 12.3179 13.184 12.187C13.184 12.0561 13.1583 11.9264 13.1081 11.8055C13.058 11.6845 12.9846 11.5746 12.892 11.482L8.00202 6.59202L12.892 1.70202C13.272 1.32202 13.272 0.682021 12.892 0.302021Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                cursor: "pointer",
              }}
              className="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={showPrevious}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99941 11.3084L0.691406 6.00038L5.99941 0.692383L6.70741 1.40038L2.10741 6.00038L6.70741 10.6004L5.99941 11.3084Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                cursor: "pointer",
              }}
              className="bg-white/80 w-8 h-8 rounded-full flex items-center justify-center"
              onClick={showNext}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.29141 6.00038L0.691406 1.40038L1.39941 0.692383L6.70741 6.00038L1.39941 11.3084L0.691406 10.6004L5.29141 6.00038Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Gallery;
