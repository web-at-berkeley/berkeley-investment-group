import React from "react";

import {} from "react-bootstrap";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import fbLogo from "./assets/facebook-logo.png";
import igLogo from "./assets/instagram-logo.png";
import liLogo from "./assets/linkedin-logo.png";

const cx = classNames.bind(styles);

const smInfo = [
  {
    icon: fbLogo,
    name: "Facebook",
    link: "",
  },
  {
    icon: igLogo,
    name: "Instagram",
    link: "",
  },
  {
    icon: liLogo,
    name: "LinkedIn",
    link: "",
  },
];

const Footer = () => {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-left")}>
        <h1>BIG</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a
          arcu cursus vitae congue mauris rhoncus.
        </p>
      </div>
      <div className={cx("footer-right")}>
        <h5>Connect With Us:</h5>
        <div className={cx("footer-right-smlinks")}>
          {smInfo.map((sm, index) => (
            <a key={index} href={sm.link}>
              <img src={sm.icon} alt={sm.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
