import "./Hero.css";
import { useEffect, useState } from "react";

import img1 from '../assets/kids.jpg';
import img2 from "../assets/kidPaint.jpg";
import img3 from "../assets/kidsPlaying.jpg";
import img4 from "../assets/kidsstudying.jpg";


const Hero = () => {
  const slides = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <section className="hero fade-up">
      {slides.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="overlay">
        <div className="quoteBox">
          <p>"I like the play equipment."</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
