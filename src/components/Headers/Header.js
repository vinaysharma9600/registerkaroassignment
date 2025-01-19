import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="logo">
        <img src="/registerLogo.png" alt="RegisterKaro" />
      </div>
      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="/services">Our Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
        <a href="/search" className="search-icon">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </a>
      </nav>
      <div className="cta">
        <button className="cta-button">Talk An Expert</button>
      </div>
    </div>
  );
};

export default MiddleHeader;
