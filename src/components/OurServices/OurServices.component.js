import React from "react";
import {
  OurServicesTitle,
  OurServicesSubtitle,
  ServiceCard,
  ServicesCardImg,
  ServicesCardTitle,
  ServicesCardTitleBig,
  ServicesCardSubtitle,
  ServicesCardBig,
  ServicesCardImgBig,
  ServicesCardSubtitleBig,
} from "./OurServices.styles";
import laptop from "../../assets/laptop.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";

export default function OurServices() {
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
          lg={{ span: 4, order: 1 }}
          md={{ span: 7, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ServiceCard>
            <ServicesCardImg src={laptop} />
            <ServicesCardTitle>Web Development</ServicesCardTitle>
            <ServicesCardSubtitle>
              Hi my name is Jpanit and we do web development hello and yes
            </ServicesCardSubtitle>
          </ServiceCard>
        </Col>
        <Col
          className="d-flex justify-content-center"
          lg={{ span: 4, order: 1 }}
          md={{ span: 7, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ServicesCardBig className='services-big'>
            <ServicesCardImgBig src={laptop} />
            <ServicesCardTitleBig>Web Development</ServicesCardTitleBig>
            <ServicesCardSubtitleBig>
              Hi my name is Jpanit and we do web development hello and yes
            </ServicesCardSubtitleBig>
          </ServicesCardBig>
        </Col>
        <Col
          className="d-flex justify-content-center"
          lg={{ span: 4, order: 1 }}
          md={{ span: 7, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ServiceCard className="text-center">
            <ServicesCardImg src={laptop} />
            <ServicesCardTitle>Web Development</ServicesCardTitle>
            <ServicesCardSubtitle>
              Hi my name is Jpanit and we do web development hello and yes
            </ServicesCardSubtitle>
          </ServiceCard>
        </Col>
      </Row>
    </Container>
  );
}
