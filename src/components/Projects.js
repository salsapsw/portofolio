import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/proj-Img1.png";
import projImg2 from "../assets/img/proj-Img2.jpg";
import projImg3 from "../assets/img/proj-Img3.png";
import projImg4 from "../assets/img/dokumen.svg";

export const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h1>Projects</h1>
              <br></br>
              <Carousel responsive={responsive} infinite={true} className="project-slider">
                <div className="items">
                  <a href="https://drive.google.com/file/d/1UBDJ1YAa4-uBlryKjG6ReWflf7i8uowT/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={projImg1} alt="Image" />
                  </a>
                  <h5>Sistem Kenaikan Gaji Berkala</h5>
                </div>
                <div className="items">
                  <a href="https://drive.google.com/file/d/1eYCoAtEDawGLIsFyVgMKNEwOmQAl4xx0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={projImg2} alt="Image" />
                  </a>
                  <h5>Website Monitoring</h5>
                </div>
                <div className="items">
                  <a href="https://drive.google.com/drive/folders/1o5hmD2JPg4TSggWFJWV2HHczNrcUdeX4?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={projImg4} alt="Image" />
                  </a>
                  <h5>SDLC SIPEHA</h5>
                </div>
                <div className="items">
                  <a href="https://drive.google.com/file/d/1QBbKvEswmFeTci-tbYvzFBD5Gi_emUYS/view" target="_blank" rel="noopener noreferrer">
                    <img src={projImg3} alt="Image" />
                  </a>
                  <h5>Perancangan Website Kegiatan Angkatan</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
