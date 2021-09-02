import React from "react";
import {
  OurServicesTitle,
  OurServicesSubtitle,
  ServiceCard,
  ServicesCardImg,
  ServicesCardTitle,
  ServicesCardSubtitle,
} from "./OurServices.styles";
import icon from "../../assets/icon.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";

class OurServices extends React.Component {
  constructor() {
    super();
    this.state = {
      sizes: ["small", "big", "small"],
    };
  }

  handleOnHover = (e) => {
    let { key } = e.target.dataset;
    console.log(key);
    let temp = this.state.sizes;
    temp.map((index, value) => {
      if (index === key && value === "small") {
        temp[index] = "big";
      } else {
        temp[index] = "small";
      }
    });

    this.setState({
      sizes: temp,
    });
  };

  render() {
    console.log(this.state.sizes);
    return (
      <Container fluid style={{ backgroundColor: "rgba(154,211,255,0.3)" }}>
        <Row style={{ padding: "2em" }}>
          <Col lg={12}>
            <OurServicesTitle className="text-center">
              How Can We Help?
            </OurServicesTitle>
          </Col>
          <Col lg={12}>
            <OurServicesSubtitle className="text-center">
              We can help cause we are awesome!
            </OurServicesSubtitle>
          </Col>
        </Row>

        <Row className="align-items-center" style={{ padding: "0 0 2em 0" }}>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="0" id="0" size={this.state.sizes[0]}>
              <ServicesCardImg src={icon} size={this.state.sizes[0]} />
              <ServicesCardTitle size={this.state.sizes[0]}>
                UI/UX
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[0]}>
                Hi my name is Jpanit and we do web development hello and yes
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="1" id="1" size={this.state.sizes[1]}>
              <ServicesCardImg size={this.state.sizes[1]} src={icon} />
              <ServicesCardTitle size={this.state.sizes[1]}>
                Web Development
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[1]}>
                Hi my name is Jpanit and we do web development hello and yes
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
          <Col
            className="d-flex justify-content-center"
            lg={4}
            md={4}
            sm={12}
            xs={12}
          >
            <ServiceCard data-key="2" id="2" size={this.state.sizes[2]}>
              <ServicesCardImg size={this.state.sizes[2]} src={icon} />
              <ServicesCardTitle size={this.state.sizes[2]}>
                Branding & Social Media
              </ServicesCardTitle>
              <ServicesCardSubtitle size={this.state.sizes[2]}>
                Hi my name is Jpanit and we do web development hello and yes
              </ServicesCardSubtitle>
            </ServiceCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OurServices;
