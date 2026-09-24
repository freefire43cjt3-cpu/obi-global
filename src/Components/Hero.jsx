import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            REAL ESTATE • PORT HARCOURT
          </span>

          <h1>
            Find A Property
            <span>Worth Coming Home To.</span>
          </h1>

          <p>
            Discover residential, commercial, land and luxury property
            opportunities with OBIGLOBALLINKS.
          </p>

          <div className="hero-buttons">
            <a href="#properties" className="hero-primary-btn">
              Explore Properties
              <ArrowRight size={18} />
            </a>

            <a href="#about" className="hero-secondary-btn">
              <Play size={16} />
              Discover Our Story
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <div>
            <strong>BUY</strong>
            <span>Find your next property</span>
          </div>

          <div>
            <strong>SELL</strong>
            <span>Market your property</span>
          </div>

          <div>
            <strong>INVEST</strong>
            <span>Explore opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;