import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/khaledhossain-devacc/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/officialkhaled"
        target="_blank"
        rel="noreferrer"
      >
        <ImGithub />
      </a>

      <a
        href="https://www.facebook.com/khaledhossain.dev"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
