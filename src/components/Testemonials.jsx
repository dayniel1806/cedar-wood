import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import parent1 from "../assets/parent.jpg";
import parent2 from "../assets/happyParent.jpg";
import parent3 from "../assets/students learn.jpg";

import parentProf1 from "../assets/parentProf1.jpg";
import parentProf2 from "../assets/parentProf2.jpg";
import parentProf3 from "../assets/parentProf3.jpg";

const testimonials = [
  {
    id: 1,
    image: parent1,
    text: "Enrolling my daughter in Cedar-Wood Academy School was the best decision I ever made! She’s thriving academically and socially...",
    name: "John Doe",
    role: "Parent / Guardian",
    profile: parentProf3,
  },
  {
    id: 2,
    image: parent2,
    text: "The teachers are so supportive and really care about the students. My son loves going to school every day now!",
    name: "Mary Johnson",
    role: "Parent / Guardian",
    profile: parentProf2,
  },
  {
    id: 3,
    image: parent3,
    text: "This school has transformed my child’s confidence. The activities and programs are top-notch!",
    name: "Jessica Smith",
    role: "Parent / Guardian",
    profile: parentProf1,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto switch every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="testimonial">
      <h4 className="subtitle">TESTIMONIAL</h4>
      <h2 className="title">What Parents Say</h2>

      <div className="testimonial-container fade">
        {/* Left image */}
        <div className="testimonial-image">
          <img src={t.image} alt="Parent and child" />
        </div>

        {/* Right content */}
        <div className="testimonial-content">
          <div className="quote">“</div>
          <p className="message">"{t.text}"</p>

          <div className="author">
            <img src={t.profile} alt={t.name} className="author-img" />
            <div>
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
