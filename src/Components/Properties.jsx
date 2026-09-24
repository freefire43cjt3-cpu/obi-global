import { ArrowUpRight, MapPin } from "lucide-react";
import "./Properties.css";

const properties = [
  {
    id: 1,
    image: "/images/p1.jpeg",
    type: "FOR SALE",
    title: "Modern Family Residence",
    location: "Port Harcourt, Rivers State",
    price: "₦85,000,000",
    details: "4 Beds • 5 Baths",
  },
  {
    id: 2,
    image: "/images/p2.jpeg",
    type: "FOR SALE",
    title: "Contemporary Luxury Home",
    location: "GRA Phase 2, Port Harcourt",
    price: "₦150,000,000",
    details: "5 Beds • 6 Baths",
  },
  {
    id: 3,
    image: "/images/p5.jpeg",
    type: "LAND",
    title: "Prime Residential Land",
    location: "Rumuokoro, Port Harcourt",
    price: "₦35,000,000",
    details: "Residential • Serviced",
  },
  {
    id: 4,
    image: "/images/p4.jpeg",
    type: "FOR RENT",
    title: "Executive Apartment",
    location: "Old GRA, Port Harcourt",
    price: "₦5,500,000 / year",
    details: "3 Beds • 4 Baths",
  },
];

function Properties() {
  return (
    <section className="properties-section" id="properties">
      <div className="properties-container">

        {/* Heading */}
        <div className="properties-heading">
          <div>
            <span className="properties-label">FEATURED PROPERTIES</span>

            <h2>
              Spaces Worth
              <span>Calling Your Own.</span>
            </h2>
          </div>

          <p>
            Explore selected property opportunities across residential,
            commercial and land categories.
          </p>
        </div>

        {/* Property Grid */}
        <div className="properties-grid">
          {properties.map((property) => (
            <article className="property-card" key={property.id}>

              <div className="property-image-wrapper">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />

                <span className="property-type">
                  {property.type}
                </span>

                <button
                  className="property-arrow"
                  aria-label={`View ${property.title}`}
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <div className="property-content">

                <h3>{property.title}</h3>

                <div className="property-location">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>

                <div className="property-bottom">
                  <div>
                    <span className="property-details">
                      {property.details}
                    </span>

                    <strong>{property.price}</strong>
                  </div>

                  <a href="#contact">
                    Inquire
                    <ArrowUpRight size={15} />
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="properties-cta">
          <p>
            Looking for something specific?
          </p>

          <a href="#contact">
            Talk to an Agent
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Properties;