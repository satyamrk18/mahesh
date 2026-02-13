import React, { useState, useEffect } from "react";
import sobt1 from "./../images/sobt1.jpeg";
import sobt2 from "./../images/sobt2.jpeg";
import sobt3 from "./../images/sobt3.jpeg";
import sobt4 from "./../images/sobt4.png";
import sobt5 from "./../images/sobt5.jpeg";
const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - replace with your actual photos
  const photos = [sobt1,sobt2,sobt3,sobt4,sobt5];

  const captions = [
    "Our first adventure together",
    "That magical sunset",
    "When you made me laugh so hard",
    "Our perfect day",
    "The moment I knew you were the one",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <div className="photo-slider-container">
      <h2 className="slider-title">Our Beautiful Memories</h2>
      <div className="slider-wrapper">
        <div className="slider-content">
          <div className="photo-frame">
            <img
              src={photos[currentSlide]}
              alt={captions[currentSlide]}
              className="slider-image slider-image-animated"
              key={currentSlide}
            />
            <div className="photo-overlay">
              <p className="photo-caption">{captions[currentSlide]}</p>
            </div>
          </div>
        </div>

        <div className="slider-dots">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`slider-dot ${currentSlide === index ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
