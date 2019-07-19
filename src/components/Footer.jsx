import React from "react";
import github from "../images/github-brands.svg";
import linkedin from "../images/linkedin.svg";

const Footer = props => {
  return (
    <div className="footer">
      <h3>Copyright © Two Brothers Tents 2019</h3>
      <div className="my-links">
        <a
          className="github"
          href="https://github.com/Mdellit110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/matthew-dellitalia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <h3>
          Designed by{" "}
          <a
            className="portfolio"
            href="https://matthewdellitalia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Matthew Dellitalia
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
