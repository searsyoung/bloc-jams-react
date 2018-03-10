import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Landing = () => (
  <section className="landing">
    <section className="hero2">
      <h1>Turn the music up!</h1>
      <h3>What will you listen to today?</h3>
      <p />
      <Link to="/library" className="btn">
        Show me the music!
      </Link>
    </section>

    <section className="selling-points">
      <div className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">
          The world is full of music; why should you have to listen to music
          that someone else chose?
        </p>
      </div>
      <div className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">
          No arbitrary limits. No distractions.
        </p>
      </div>
      <div className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">
          Listen to your music on the go. This streaming service is available on
          all mobile platforms.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
