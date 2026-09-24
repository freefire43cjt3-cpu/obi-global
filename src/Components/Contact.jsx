import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const phoneNumber = "2349115817660";

  const whatsappMessage = encodeURIComponent(
    "Hello OBIGLOBALLINKS, I would like to make an enquiry about your property services."
  );

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">
          <span className="contact-label">GET IN TOUCH</span>

          <h2>
            Let's Talk About
            <span>Your Next Property.</span>
          </h2>

          <p>
            Whether you're looking to buy, sell, rent, lease, or invest,
            get in touch with OBIGLOBALLINKS and let's discuss your property
            needs.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>OUR OFFICE</span>
                <p>
                  2 Old Aba Road, Opposite Customary Court of Appeal,
                  Rumuogba, Port Harcourt, Rivers State
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>PHONE</span>
                <a href="tel:+2349115817660">
                  0911 581 7660
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div>
                <span>EMAIL</span>
                <a href="mailto:obigloballinks@gmail.com">
                  obigloballinks@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <span>BUSINESS HOURS</span>
                <p>Monday – Saturday • 8:00 AM – 6:30 PM</p>
              </div>
            </div>

          </div>

          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-whatsapp"
          >
            Chat With Us on WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>


        {/* Right Side */}
        <div className="contact-card">

          <span>PROPERTY ENQUIRY</span>

          <h3>
            Tell us what
            <strong>you're looking for.</strong>
          </h3>

          <p>
            Have a property in mind or need help finding one?
            Reach out directly and our team can assist you.
          </p>

          <div className="contact-card-line"></div>

          <a href="tel:+2349115817660" className="contact-call">
            <Phone size={19} />
            <div>
              <small>CALL US</small>
              <strong>0911 581 7660</strong>
            </div>
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;