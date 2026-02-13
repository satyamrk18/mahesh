import { useState, useEffect, useRef } from "react";
import IntroScreen from "../components/IntroScreen";
import HeartAnimation from "../components/HeartAnimation";
import FloatingText from "../components/FloatingText";
import LoveLetter from "../components/LoveLetter";
import PhotoSlider from "../components/PhotoSlider";
import SurpriseButton from "../components/SurpriseButton";
import ParticleHeart from "../components/ParticleHeart";
import SurpriseModal from "../components/SurpriseModal";
import FlowerPetals from "../components/FlowerPetals";
import SweetQuotes from "../components/SweetQuotes";
import AnimatedImageGrid from "../components/AnimatedImageGrid";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleMusicToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.play();
      setMusicPlaying(true);
    }
  };

  const handleEnterSite = async () => {
    setShowIntro(false);

    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log("User interaction required to play music");
      }
    }
  };

  const handleSurpriseClick = () => {
    setShowSurprise(true);
    setShowModal(true);
  };

  if (showIntro) {
    return <IntroScreen onEnter={handleEnterSite} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden romantic-bg">
      <FlowerPetals />

      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`heart heart-${i + 1}`}>
            💖
          </div>
        ))}
      </div>

      <div className="twinkling-stars">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`star star-${i + 1}`}>
            ✨
          </div>
        ))}
      </div>

      <SweetQuotes />

      <button
        onClick={handleMusicToggle}
        className="fixed top-4 right-4 z-50 bg-pink-500/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-pink-500/30 transition-all duration-300"
      >
        {musicPlaying ? "🎵" : "🔇"}
      </button>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 page-enter">
        <div className="text-center mb-12">
          <HeartAnimation />
          <FloatingText />
        </div>

        <div className="w-full max-w-4xl mb-12">
          <LoveLetter />
        </div>

        <div className="w-full max-w-4xl mb-12">
          <PhotoSlider />
        </div>

        <div className="w-full max-w-6xl mb-12">
          <AnimatedImageGrid />
        </div>

        <div className="mb-12">
          <SurpriseButton onReveal={handleSurpriseClick} />
        </div>

        {showSurprise && !showModal && <ParticleHeart />}
      </div>

      <SurpriseModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <audio ref={audioRef} loop preload="auto">
        <source src="/audio.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Index;
