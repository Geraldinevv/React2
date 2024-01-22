// SocialButton.js
import React from "react";

const SocialButton = ({ icon, network, image }) => {
  return (
    <button
      className="social-icon"
      onClick={() => console.log(`${network} button clicked`)}
    >
      <img src={image} alt={`${network} icon`} />
    </button>
  );
};

export default SocialButton;