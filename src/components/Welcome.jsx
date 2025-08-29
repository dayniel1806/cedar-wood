import React from "react";
import "./Welcome.css";
import img1 from "../assets/primaryBoy.jpg";
import img2 from "../assets/PrimaryClass.jpg";
import img3 from "../assets/PrimaryTeavher.jpg";

import whyImg from "../assets/pupils.jpg";
const Welcome = () => {
  return (
    <div className="erasmus fade-up">
      {/* Hero / Welcome Section */}
      <section className="welcome">
        <div className="welcome-content">
          {/* Left: Text */}
          <div className="welcome-text">
            <h1>Welcome to Cedar-Wood Academy</h1>
            <h3>Quest For Excellence</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              neque. Ipsum sed minus porro fugit qui? Quia repellendus earum
              tempore rerum, vel quod consequatur excepturi ipsa illum, nulla
              modi mollitia ratione adipisci qui! Suscipit fugiat vero voluptas
              quaerat libero deleniti, hic pariatur ipsam corrupti modi, itaque
              voluptatum. Nihil necessitatibus assumenda impedit? Ducimus
              incidunt voluptas eligendi quod atque expedita, qui odio.
            </p>
            <div className="buttons">
              <button className="btn grey">OUR APPROACH</button>
              <button className="btn green">VISIT OPEN DAY</button>
              <button className="btn orange">GET FREE ADVICE</button>
            </div>
          </div>
          <div className="welcome-images">
            <img src={img3} alt="Welcome 1" />
            <img src={img1} alt="Welcome 2" />
            <img src={img2} alt="Welcome 3" />
          </div>
        </div>
      </section>

      {/* Attention Banner */}
      <section className="attention">
        <div className="overlay">
          <h2>
            100% <span>SUCCESS</span>
          </h2>
        </div>
      </section>

      <section className="why">
        <div className="why-text">
          <h2>Why Cedar-Wood Academy?</h2>
          <p>The base for your future</p>
          <ul>
            <li>✔ Lorem ipsum dolor sit amet</li>
            <li>✔ Consectetur adipiscing elit</li>
            <li>✔ Sed do eiusmod tempor incididunt</li>
          </ul>
        </div>
        <div className="why-image">
          <img src={whyImg} alt="Why Cedar Wood" />
        </div>
      </section>
    </div>
  );
};

export default Welcome;
