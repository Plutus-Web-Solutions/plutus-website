import React from "react";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  ContentDiv,
  Subtitle,
  Title,
  SliderDiv,
  FirstImage,
  SecondImage,
} from "./ProjectSlider.styles";
import device from "../../assets/device.png";

class ProjectSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [device, device, device, device],
      index: 0,
    };
  }

  render() {
    return (
      <Container fluid style={{ backgroundColor: "#F1F9FF" }}>
        <Row>
          <Col lg={6}>
            <ContentDiv>
              <Title> One stop shop for all your needs!</Title>
              <Subtitle>
                At plutus we aim to fullfill are your agency needs and here
              </Subtitle>
            </ContentDiv>
          </Col>

          <Col lg={6}>
            <SliderDiv>
              <FirstImage src={device} style={{ height: "70%" }} />
              <SecondImage src={device} style={{ height: "50%" }} />
            </SliderDiv>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectSlider;
