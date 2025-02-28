import React, { useEffect, useState } from "react";
import slider from "../../images/services/mediabenotman-img1.webp";
import slider2 from "../../images/services/mediabenotman-img2.webp";
import slider3 from "../../images/services/mediabenotman-img3.webp";
import slider4 from "../../images/services/mediabenotman-img4.webp";
import slider5 from "../../images/services/mediabenotman-img5.webp";
import slider6 from "../../images/services/mediabenotman-img6.webp";

// Array of images
const ClientImages = [
  { id: 1, image: slider },
  { id: 2, image: slider2 },
  { id: 3, image: slider3 },
  { id: 4, image: slider4 },
  { id: 5, image: slider5 },
  { id: 6, image: slider6 },
];

const Clients = () => {
  const [animationDuration, setAnimationDuration] = useState(10); // Default speed

  // Adjust scrolling speed based on screen size
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setAnimationDuration(5); // Faster scrolling for small screens
      } else if (window.innerWidth < 1024) {
        setAnimationDuration(8); // Medium speed for tablets
      } else {
        setAnimationDuration(12); // Slower for large screens
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  // Duplicate images for smooth infinite scrolling
  const duplicatedImages = [...ClientImages, ...ClientImages];

  return (
    <div className="relative overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex animate-carousel"
        style={{
          animationDuration: `${animationDuration}s`, // Adjusted speed dynamically
        }}
      >
        {duplicatedImages.map((client, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
            <img
              src={client.image}
              alt="Client"
              className="w-full h-auto rounded-xl"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-carousel {
          display: flex;
          animation: carousel-scroll linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Clients;

