import React from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import bannerImg from "./banner-img.jpeg";
/*
    --- LANDING PAGE CONTENT ---
    1. Navbar
    2. Banner Image
    3. Quotes | Group Photo
    4. Events graphic | Event info
    5. "What we do"
    6. Footer
*/

const Landing = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

const Banner = () => {
  return (
    <Container overflow>
      <Card class="text-white">
        <Card.Img src={bannerImg} />
        <Card.ImgOverlay>
          <Card.Title>Berkeley Investment Group</Card.Title>
          <Card.Text>Invest in yourself.</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default Landing;
