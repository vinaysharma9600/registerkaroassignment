import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const UpperHeader = () => {
  return (
    <div className="upper-header">
      <div className="contact-info">
        <span>
          <FontAwesomeIcon icon={faEnvelope} /> info@registerkaro.in
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} /> +91 484 7476183
        </span>
      </div>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
};

export default UpperHeader;
