import "./Home.css";
import { useEffect, useState } from 'react';


import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Programs from "../components/Program";
import ChooseUs from "../components/ChooseUs";
import Footer from "../components/Footer";
import Testimonial from "../components/Testemonials";
import Board from "../components/Board";

const Home = () => {
  return (
    <div className="container">
        <Navbar />
        <Hero />
        <Welcome />
        <Programs />
        <ChooseUs />
        <Testimonial />
        <Board />
        <Footer />  
    </div>
  );
};

export default Home;