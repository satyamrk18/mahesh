import React, { useState, useEffect } from "react";
import ticha1 from "./../images/ticha1.jpeg";
import ticha2 from "./../images/ticha2.jpeg";
import ticha3 from "./..//images/ticha3.jpeg";
import ticha4 from "./../images/ticha4.jpeg";
import ticha5 from "./../images/ticha5.jpeg";
import sobt1 from "./../images/sobt1.jpeg";
const AnimatedImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: ticha1,
      caption: "You Made My Dreams Come True",
      delay: 0,
    },
    {
      src: ticha2,
      caption: "Every Moment With You",
      delay: 0.2,
    },
    {
      src: ticha3,
      caption: "Forever In My Heart",
      delay: 0.4,
    },
    {
      src: ticha4,
      caption: "You Are My Everything",
      delay: 0.6,
    },
    {
      src: ticha5,
      caption: "Love Beyond Words",
      delay: 0.8,
    },
    {
      src: sobt1,
      caption: "Beautiful Like You",
      delay: 1.0,
    },
  ];

  const decorativeElements = [
    { emoji: "🌸", top: "10%", left: "5%", delay: 0 },
    { emoji: "💕", top: "15%", left: "85%", delay: 0.5 },
    { emoji: "🦋", top: "25%", left: "15%", delay: 1 },
    { emoji: "✨", top: "35%", left: "90%", delay: 1.5 },
    { emoji: "🌺", top: "45%", left: "8%", delay: 2 },
    { emoji: "💖", top: "55%", left: "92%", delay: 2.5 },
    { emoji: "🌹", top: "65%", left: "12%", delay: 3 },
    { emoji: "🎀", top: "75%", left: "88%", delay: 3.5 },
    { emoji: "🍓", top: "85%", left: "10%", delay: 4 },
    { emoji: "🌟", top: "95%", left: "85%", delay: 4.5 },
  ];

  return (
    <div className="animated-image-grid-container">
      <div className="grid-background-decoration">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className="floating-decoration"
            style={{
              top: element.top,
              left: element.left,
              animationDelay: `${element.delay}s`,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="grid-header">
        <h2 className="grid-title">
          <span className="title-line">You Made</span>
          <span className="title-line">My World</span>
          <span className="title-line">Even More</span>
          <span className="title-line">Beautiful</span>
        </h2>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${hoveredIndex === index ? "hovered" : ""}`}
            style={{ animationDelay: `${image.delay}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img src={image.src} alt={image.caption} className="grid-image" />
              <div className="image-overlay">
                <div className="image-hearts">
                  <span className="heart-1">💕</span>
                  <span className="heart-2">💖</span>
                  <span className="heart-3">💕</span>
                </div>
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
            <div className="item-border"></div>
          </div>
        ))}
      </div>

      <div className="grid-message">
        <p className="romantic-message">
          Every picture tells our story, every moment is a treasure 💕
        </p>
      </div>
    </div>
  );
};

export default AnimatedImageGrid;
