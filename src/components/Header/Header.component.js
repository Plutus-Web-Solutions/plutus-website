import React from "react";
import {
  HeaderButtonsDiv,
  HeaderButton,
  HeaderGraphic,
  HeaderGraphicImg,
  HeaderLined,
  HeaderSolid,
  HeaderSubtitle,
  HeaderText,
  HeaderTitle,
} from "./Header.styles";
import laptop from "../../assets/laptop.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";

export default function Header() {
  return (
    <Container fluid>
      <Row>
        <NavBar></NavBar>
      </Row>

      <Row
        className="align-items-center"
        style={{ height: "90vh", padding: "2em" }}
      >
        <Col
          lg={{ span: 6, order: 1 }}
          md={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <HeaderText>
            <HeaderTitle>PLUTUS IS THE BEST IN THE INDUSTRY</HeaderTitle>
            <HeaderSubtitle>That's why you should hire us!</HeaderSubtitle>
            <HeaderButtonsDiv>
              <HeaderButton type="normal">CONTACT US</HeaderButton>
              <HeaderButton type="inverse"> PORTFOLIO</HeaderButton>
            </HeaderButtonsDiv>
          </HeaderText>
        </Col>

        <Col
          lg={{ span: 6, order: 2 }}
          md={{ span: 12, order: 1 }}
          sm={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
        >
          <HeaderGraphic>
            <HeaderLined />
            <HeaderSolid />
            <HeaderGraphicImg src={laptop} />
          </HeaderGraphic>
        </Col>
      </Row>
    </Container>
  );
}
