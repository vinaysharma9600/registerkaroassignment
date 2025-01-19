import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

const services = [
  {
    icon: "/companyop.png", // Replace with the actual image path in your public folder
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
  },
  {
    icon: "/sectorservice.png",
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
  },
  {
    icon: "/virtual.png",
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
  },
  {
    icon: "/Annual.png",
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
  },
  {
    icon: "/payroll.png",
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
  },
  {
    icon: "/booking.png",
    title: "Bookkeeping Services",
    description:
      "Steering user behaviours with creative design, data insights & technology.",
  },
];
const HomeContent = () => {
  return (
    <>
      <div className="home-content">
        <div className="text-content" id="home">
          <div>
            {/* One star before the text */}
            <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />

            <span>Google Rating</span>

            {/* Five stars after the text */}
            <div style={{ display: "inline-block" }}>
              <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />
              <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />
              <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />
              <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />
              <FontAwesomeIcon icon={faStar} size="lg" color="#FFD700" />
            </div>
          </div>
          <h1>Your trusted partner for compliance business needs</h1>
          <p>
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <div className="metrics">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  size="2x"
                  color="#004085"
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <strong
                  style={{
                    background:
                      "linear-gradient(90deg, #FFA229 0%, #1C4670 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  4.5+
                </strong>
                <p>Customer Rating</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <img
                  src="/users.png"
                  alt="Icon"
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <strong
                  style={{
                    background:
                      "linear-gradient(90deg, #FFA229 0%, #1C4670 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  20,000+
                </strong>
                <p>Clients</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div>
                <img
                  src="/handshake.png"
                  alt="Icon"
                  style={{ width: "40px", height: "auto" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <strong
                  style={{
                    background:
                      "linear-gradient(90deg, #FFA229 0%, #1C4670 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  99.8%
                </strong>
                <p>Financial Stability</p>
              </div>
            </div>
          </div>
          <div className="cta-buttons">
            <button className="primary2">Talk An Expert</button>
            <button className="secondary">
              <img src="/play.png" alt="Icon" className="button-icon" />
              See How it Works
            </button>
          </div>
        </div>
        <div className="illustration-container">
          <div className="illustration">
            <img src="/illustration.png" alt="Illustration" />
            <div className="services-overlay">
              <div className="service">Annual Compliance</div>
              <div className="service">Payroll Services</div>
              <div className="service">Company Formation</div>
              <div className="service">Annual Compliance</div>
            </div>
          </div>
        </div>
      </div>
      <div id="trusted">
        <img
          src="/trustedCompanies.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="services-container">
        <h1 className="services-header">WELCOME TO REGISTERKARO.IN</h1>
        <h2 className="services-subheader">Explore Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#learn-more" className="learn-more">
                Learn more →
              </a>
            </div>
          ))}
        </div>
        <button className="see-all-services">See All Services</button>
      </div>

      <div id="About">
        <img
          src="/About.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="Choose">
        <img
          src="/choose.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="Video">
        <img
          src="/video.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="Clients">
        <img
          src="/clients.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="fillupForm">
        <img
          src="/fillupForm.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="Acclerate">
        <img
          src="/Acclerate.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="peoplesays">
        <img
          src="/peoplesays.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="frequentquest">
        <img
          src="/frequentquest.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="somenumbers">
        <img
          src="/somenumbers.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="digitalreality">
        <img
          src="/digitalreality.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div id="companies">
        <img
          src="/companies.png"
          alt="Description of the image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default HomeContent;
