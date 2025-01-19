import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faApple,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column description">
          <p>
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            <FontAwesomeIcon icon={faApple} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>
        </div>

        <div className="footer-column">
          <h4>START A BUSINESS</h4>
          <ul>
            <li>Features</li>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Enterprise</li>
            <li>Solutions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>GOVERNMENT REGISTRATION</h4>
          <ul>
            <li>Partners</li>
            <li>Community</li>
            <li>Developers</li>
            <li>App</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPLIANCE & TAX</h4>
          <ul>
            <li>Channels</li>
            <li>Scale</li>
            <li>Watch the Demo</li>
            <li>Our Competition</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>BIS & CDSCO</h4>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>Leadership</li>
            <li>Media Kit</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="back-to-top">
          <span>↑</span>
        </div>
        <p>© 2025 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
