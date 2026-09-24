import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <img
            src="/images/obi3.png"
            alt="OBIGLOBALLINKS real estate"
            className="about-image"
          />

          <div className="about-image-card">
            <span>OBIGLOBALLINKS</span>
            <p>Real Estate & Property Services</p>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <span className="about-label">ABOUT US</span>

          <h2>
            Connecting You With
            <span> Better Property Opportunities.</span>
          </h2>

          <p className="about-intro">
            OBIGLOBALLINKS is a real estate and property services business
            helping individuals and businesses navigate property buying,
            selling, leasing, investment, and development opportunities.
          </p>

          <p>
            From residential homes and land to commercial and luxury
            properties, our goal is to make the property journey clearer,
            more convenient, and better suited to each client's needs.
          </p>

          <div className="about-features">
            <div>
              <CheckCircle2 size={19} />
              <span>Property Buying & Sales</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Property Investment</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Property Management</span>
            </div>

            <div>
              <CheckCircle2 size={19} />
              <span>Real Estate Consulting</span>
            </div>
          </div>

          <a href="#contact" className="about-button">
            Learn More
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;