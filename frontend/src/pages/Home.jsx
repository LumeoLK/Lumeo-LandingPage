import React from "react";
import GetInTouch from "../components/GetInTouch.jsx";
import FeaturesHome from "../components/FeaturesHome.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/NavBar.jsx";
import NeonGridScene from "../components/NeonGridScene.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NeonGridScene />
      <Hero />
      <FeaturesHome />
      <GetInTouch />
    </div>
  );
};

export default Home;
