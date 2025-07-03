import React, { useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is added

// import './BirthdayPage.css'; // 👈 Un-comment this when your CSS is ready

// Gallery Images
import a1 from "./images/a1.jpg";
import a2 from "./images/a2.jpg";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.jpg";
import a5 from "./images/a5.jpg";

// Video
import v from "./images/birthday.mp4";

// Carousel Images
import c1 from "./images/a6.jpg";
import c2 from "./images/a7.jpg";
import c3 from "./images/a8.jpg";
import c4 from "./images/a9.jpg";


function BirthdayPage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
      setIsMuted(false);
    }
  };

  return (
    <div className="container">
      <h1 className="glow">🎉 Happy Birthday Arpita! 🎂</h1>
      <p className="message">
        Happy Birthday to the one and only <strong>Dedh Footiya Arpita</strong>! 🤭❤️<br />
        May your day be as fabulous and tiny as you are 😄✨<br />
        From all your friends who love your <i>extra-small-but-extra-special</i> presence! 💕
      </p>

      {/* 🎥 Video Section */}
      <div className="video-section">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="birthday-video"
        >
          <source src={v} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay-text">You're amazing! 🌟</div>

        {isMuted && (
          <button className="unmute-button" onClick={handleUnmute}>
            🔊 Play with Sound
          </button>
        )}
      </div>

      {/* 🖼️ Gallery Section */}
      <div className="gallery">
        <img src={a1} alt="Cake" />
        <img src={a2} alt="Celebration" />
        <img src={a3} alt="Smiles" />
        <img src={a4} alt="Moments" />
        <img src={a5} alt="More Joy" />
      </div>

      {/* 🎠 Carousel Section */}
      <div className="carousel-section">
        <h2 className="carousel-title">💫 Flashback Moments 💫</h2>
        <Carousel fade interval={2500} className="birthday-carousel">
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={c1} alt="Memory 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={c2} alt="Memory 2" />
          </Carousel.Item>
        
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={c3} alt="Memory 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src={c4} alt="Memory 3" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* 🎈 Balloons Section */}
      <div className="balloons">
        <div className="balloon red"></div>
        <div className="balloon blue"></div>
        <div className="balloon green"></div>
      </div>
    </div>
  );
}

export default BirthdayPage;
