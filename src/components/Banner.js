import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import salsa from "../assets/img/salsa.png";

export const Banner = () => {
  const redirectToLinkedIn = () => {
    const linkedInProfileUrl = "https://www.linkedin.com/in/salsabillapsw/"; // Gantikan dengan URL profil LinkedIn Anda
    window.open(linkedInProfileUrl, "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portofolio</span>
            <h1>
              {"Hi i'am Salsa"}
              <br></br>
            </h1>
            <h2>Website Developer</h2>
            <div class="some-container">
              <button onClick={redirectToLinkedIn} target="_blank">
                Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={salsa} alt="salsa"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
