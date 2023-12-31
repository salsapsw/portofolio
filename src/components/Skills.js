import { Container, Row, Col } from "react-bootstrap";
import web from "../assets/img/web.svg";
import doc from "../assets/img/doc.svg";
import analysis from "../assets/img/analysis.svg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>Skills</h1>
              <br />
              <Row>
                <Col md={4} className="text-center">
                  {" "}
                  {/* Membagi ruang menjadi tiga bagian */}
                  <div className="item">
                    <img src={web} alt="Web Development" />
                    <h5>Web Development</h5>
                  </div>
                </Col>
                <Col md={4} className="text-center">
                  <div className="item">
                    <img src={doc} alt="Preparation of SDLC documents" />
                    <h5>Preparation of SDLC documents</h5>
                  </div>
                </Col>
                <Col md={4} className="text-center">
                  <div className="item">
                    <img src={analysis} alt="System Analysis and Design" />
                    <h5>System Analysis and Design</h5>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
