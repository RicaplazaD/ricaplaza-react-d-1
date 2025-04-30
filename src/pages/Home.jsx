import React from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../App.css";

import haikyu from "../assets/haikyu.jpeg";
import diary from "../assets/diaries.jpeg";
import soloLeveling from "../assets/SOLO.jpg";
import onepiece from "../assets/onepiece.jpeg";
import naruto from "../assets/naruto.jpg";
import hero from "../assets/hero.jpg";
import sins from "../assets/sins.jpg";
import hunter from "../assets/hunter.jpg";
import clover from "../assets/clover.jpg";
import dungeon from "../assets/dungeon.webp";
import echoes from "../assets/echoes.webp";
import mugen from "../assets/mugen.webp";
import legends from "../assets/legends.webp";
import king from "../assets/king.webp";
import battle from "../assets/battle.webp";
import avatar from "../assets/avatar.jpeg";
import ghoul from "../assets/ghoul.jpeg";
import strong from "../assets/strong.webp";
import jujutsu from "../assets/jujutsu.webp";
import ryuken from "../assets/ryuken.jpeg";
import arise from "../assets/arise.webp";




const data = {
  
  latestUpdate: [
    { title: "[🌲 New Dungeon & 2X Experience] Hunters", episode: "", image: dungeon },
    { title: "[🥚 Easter Event] Anime Fate Echoes (Alpha)", episode: "", image: echoes },
    { title: "M.U.G.E.N", episode: "", image: mugen },
    { title: "Volleyball Legends", episode: "", image: legends },
    { title: "[🎃 Update] King Legacy", episode: "", image: king },
    { title: "[Sound]Slayer Battlegrounds", episode: "", image: battle }

  ],
  upcomingAnime:  [
    { title: "ANIME AVATAR OUTFITS [2000+]", episode: "", image: avatar },
    { title: "[2 MYTHICAL QUINQUES] GHOUL", episode: "", image: ghoul },
    { title: "👑 STRONGEST MINER SIMULATOR", episode: "", image: strong },
    { title: "👑 [🐝CONSTRUCT] Jujutsu Infinite", episode: "", image: jujutsu },
    { title: "[EARLY-ACCESS] RYUKEN", episode: "", image: ryuken },
    { title: "Arise Crossover", episode: "", image: arise },
  ],

};

const Sections = ({ title, items }) => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container my-4 position-relative">
      <h4 className="text-white mb-3">{title}</h4>
      <div className="scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
        <div className="scroll-container" ref={scrollContainerRef}>
          {items.map((item, index) => (
            <div key={index} className="custom-card">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <p className="card-text medium">{item.episode}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const ControlledCarousel = () => {
  return (
    <>
      
    </>
  );
};

const Home = () => {
  return (
    <div className="bg-dark text-white">
      <ControlledCarousel />
      <Sections title="Continue" items={data.latestUpdate} />
      <Sections title="Recommended For You" items={data.upcomingAnime} />
      
    </div>
  );
};

export default Home;
