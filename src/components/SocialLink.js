import React from "react";

const SocialLink = ({ link }) => {
  return (
    <li>
      <a
        href={link.href}
        className="nav-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={`fab fa-${link.text}`}></i>
      </a>
    </li>
  );
};

export default SocialLink;
