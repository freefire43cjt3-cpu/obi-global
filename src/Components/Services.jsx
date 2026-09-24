import {
  ArrowUpRight,
  Building2,
  Home,
  KeyRound,
  LandPlot,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: <Home size={25} />,
    title: "Property Buying & Sales",
    text: "Get assistance with buying and selling residential, commercial, and luxury properties.",
  },
  {
    number: "02",
    icon: <LandPlot size={25} />,
    title: "Land & Property",
    text: "Explore opportunities for land and property purchases suited to your plans and investment goals.",
  },
  {
    number: "03",
    icon: <KeyRound size={25} />,
    title: "Property Leasing & Rentals",
    text: "Find suitable spaces for residential or business needs through property leasing and rental assistance.",
  },
  {
    number: "04",
    icon: <Building2 size={25} />,
    title: "Property Management",
    text: "Professional support for managing and maintaining property investments.",
  },
  {
    number: "05",
    icon: <TrendingUp size={25} />,
    title: "Property Investment",
    text: "Explore property investment and consulting opportunities based on your objectives.",
  },
  {
    number: "06",
    icon: <BriefcaseBusiness size={25} />,
    title: "Property Development",
    text: "Support for property development and development consulting opportunities.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Header */}
        <div className="services-header">
          <div>
            <span className="services-label">WHAT WE DO</span>

            <h2>
              Real Estate
              <span>Services Built Around You.</span>
            </h2>
          </div>

          <p>
            From finding the right property to managing an investment,
            OBIGLOBALLINKS provides a range of property services for
            individuals and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contact">
                  Learn More
                  <ArrowUpRight size={16} />
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <div>
            <span>LOOKING FOR A PROPERTY?</span>
            <h3>Let's find the right opportunity for you.</h3>
          </div>

          <a href="#contact">
            Speak With Us
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;