import React from "react";

import { Container, Card, Row, Col, Image } from "react-bootstrap";

import styles from "./styles.module.scss";
import classNames from "classnames/bind";

import groupPhoto from "./assets/group-photo.jpeg";
import book from "./assets/book.png";
import stonks from "./assets/bars.png";
import target from "./assets/darts.png";

/*
--- LANDING PAGE CONTENT ---
1. Navbar
2. Banner Image
3. Quotes | Group Photo
4. Events graphic | Event info
5. "What we do"
6. Footer
*/
const cx = classNames.bind(styles);

const cardsInfo = [
  {
    img: book,
    title: "Education",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus.",
  },
  {
    img: stonks,
    title: "Fund",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus.",
  },
  {
    img: target,
    title: "Competitions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus.",
  },
];

const Landing = () => {
  return (
    <div className={styles.parent}>
      <Banner />
      <QuotePic />
      <Events />
      <WhatWeDo />
    </div>
  );
};

const Banner = () => {
  return (
    <div className={cx("banner")}>
      <h1>Berkeley Investment Group</h1>
      <p>Invest in yourself.</p>
    </div>
  );
};

const QuotePic = () => {
  return (
    <div className={cx("quotepic")}>
      <Row className={cx("row")}>
        <Col className={cx("left")}>
          <h3>Some cheesy quote probably.</h3>
        </Col>
        <Col className={cx("right")}> </Col>
      </Row>
    </div>
  );
};

const Events = () => {
  return (
    <div className={cx("events")}>
      <Row className={cx("row")}>
        <Col className={cx("left")}></Col>
        <Col className={cx("right")}>
          <div className={cx("text-container")}>
            <h3>Event Title</h3>
            <h5>Date</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
              tellus pellentesque eu tincidunt tortor aliquam.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className={cx("whatwedo")}>
      <h2>What We Do</h2>
      <div className={cx("cards")}>
        {cardsInfo.map((card, index) => (
          <div className={cx("card")}>
            <img src={card.img} alt="" />
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
