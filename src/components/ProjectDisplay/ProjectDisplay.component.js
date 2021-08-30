import React from "react";
import {
  ProjectDisplayGraphic,
  ProjectDisplayLinedCircle,
  ProjectDisplaySolidCircle,
  ProjectDisplayContent,
  ProjectDisplayDiv,
  ProjectDisplayLink,
  ProjectDisplaySubTitle,
  ProjectDisplayTitle,
  ProjectDisplayImage,
  ProjectDisplayProgress,
  ProjectDisplayArrow,
  ProjectDescription,
} from "./ProjectDisplay.styles";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import laptop from "../../assets/laptop.png";
import arrow from "../../assets/Arrow.png";

class ProjectDisplay extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            xl={3}
            lg={2}
            md={2}
            sm={1}
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <ProjectDisplayArrow
              src={arrow}
              style={{ transform: "rotate(180deg)" }}
            />
          </Col>

          <Col
            xl={6}
            lg={8}
            md={8}
            sm={10}
            xs={10}
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <ProjectDisplaySolidCircle />
            <ProjectDisplayLinedCircle />
            <ProjectDisplayDiv>
              <ProjectDisplayImage>
                <ProjectDisplayGraphic src={laptop} />
              </ProjectDisplayImage>
              <ProjectDisplayContent>
                <ProjectDisplayTitle>HUSTLE BOSS</ProjectDisplayTitle>
                <ProjectDisplaySubTitle>WEBSITE</ProjectDisplaySubTitle>
                <ProjectDisplayLink>View Project</ProjectDisplayLink>
                <ProjectDisplayProgress></ProjectDisplayProgress>
                <ProjectDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam nec nunc sem. Nulla facilisi. Aliquam accumsan dolor id
                  luctus accumsan. Curabitur tempus vehicula orci ut fringilla.
                  Suspendisse sit amet consectetur metus, quis faucibus dolor.
                </ProjectDescription>
              </ProjectDisplayContent>
            </ProjectDisplayDiv>
          </Col>

          <Col
            xl={3}
            lg={2}
            md={2}
            sm={1}
            xs={1}
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <ProjectDisplayArrow src={arrow} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectDisplay;
