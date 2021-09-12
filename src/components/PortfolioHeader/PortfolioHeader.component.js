import React from "react";
import {
  Image,
  HeaderAlignment,
  HeaderImage,
  HeaderContainer,
} from "./PortfolioHeader.styles";
import map from "../../assets/map.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";
import { HeaderTitle, HeaderSubtitle } from "../Header/Header.styles";
import headerImage from "../../assets/portfolio.png";

export default function PortfolioHeader({ contact }) {
  return (
    <Container
      fluid
      style={{ margin: "0 0 3em 0", padding: "0", boxSizing: "border-box" }}
    >
      <Row style={{ margin: "0em 0.5em" }}>
        <NavBar contact={contact} active="Portfolio"></NavBar>
      </Row>

      <HeaderContainer>
        <Row style={{ height: "90%", padding: "0" }}>
          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="flex-start">
              <HeaderImage src={headerImage} />
            </HeaderAlignment>
          </Col>

          <Col lg={6} sm={12}>
            <HeaderAlignment bigalignment="center">
              <HeaderTitle>Our Clients</HeaderTitle>
              <HeaderSubtitle>
                We are a team of four amazing people!
              </HeaderSubtitle>
            </HeaderAlignment>
          </Col>
        </Row>

        {/* <Row>
          <Col
            lg={{ offset: 1, span: 5 }}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={icon3} animate={1} type="icon" />
            <Image src={icon4} animate={2} type="icon" />
            <Image src={person3} animate={3} />
            <Image src={icon6} animate={2} type="icon" />
            <Image src={icon5} animate={1} type="icon" />
          </Col>
          <Col
            lg={5}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={icon6} animate={1} type="icon" />
            <Image src={icon1} animate={2} type="icon" />
            <Image src={person4} animate={3} />
            <Image src={icon4} animate={2} type="icon" />
            <Image src={icon5} animate={1} type="icon" />
          </Col>
        </Row> */}
      </HeaderContainer>
    </Container>
  );
}
