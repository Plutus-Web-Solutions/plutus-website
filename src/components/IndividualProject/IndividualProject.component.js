import React from "react";
import {
  Image,
  Line,
  Alignment,
  ContentDiv,
  ProjectTypeHeading,
  CompanyNameHeading,
  ProjectDescription,
  ViewProject,
  ProjectCol,
} from "./IndividualProject.styles";
import project from "../../assets/project.png";
import projectleft from "../../assets/projectleft.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";
import tgc from "../../assets/tgctwodevice1.png";
import tanya from "../../assets/tanyatwodevice2.png";
import { Link } from "react-router-dom";

export default function IndividualProject(props) {
  return (
    <Container fluid style={{ padding: "0px" }}>
      <Row style={{ padding: "2em 0em", margin: "0" }}>
        <ProjectCol
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ContentDiv align="flex-start">
            <ProjectTypeHeading>Web Design</ProjectTypeHeading>
            <CompanyNameHeading>Tanya M Arora</CompanyNameHeading>
            <ProjectDescription align="left">
              Dont stop me now I am having such a good time, I am a shooting
              star like a tiger defying the laws of gravity. I am like a lafy
              givoca, no one is stopp me, I am burn in the through fire 200
              degrees the why they call me Mr. Farehnity, I am travelling at
              speed of light I am a super sonic mad at you
            </ProjectDescription>

            <ViewProject>
              <Line />
              <Link
                to="portfolio/tanyamarora"
                style={{ textDecoration: "none", color: "black" }}
              >
                view project
              </Link>
            </ViewProject>
          </ContentDiv>
        </ProjectCol>
        <ProjectCol
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={12}
          xs={12}
        >
          <Alignment align="flex-start">
            <Image src={tanya}></Image>
          </Alignment>
        </ProjectCol>
      </Row>

      <Row
        style={{ padding: "2em 0em", backgroundColor: "#F1F9FF", margin: "0" }}
      >
        <ProjectCol
          lg={{ span: 6, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <ContentDiv align="flex-end">
            <ProjectTypeHeading>Web Design</ProjectTypeHeading>
            <CompanyNameHeading>The Girl Code</CompanyNameHeading>
            <ProjectDescription align="right">
              Dont stop me now I am having such a good time, I am a shooting
              star like a tiger defying the laws of gravity. I am like a lafy
              givoca, no one is stopp me, I am burn in the through fire 200
              degrees the why they call me Mr. Farehnity, I am travelling at
              speed of light I am a super sonic mad at you
            </ProjectDescription>

            <ViewProject>
              <Line />
              <Link
                to="portfolio/thegirlcode"
                style={{ textDecoration: "none", color: "black" }}
              >
                view project
              </Link>
            </ViewProject>
          </ContentDiv>
        </ProjectCol>
        <ProjectCol
          lg={{ span: 6, order: 2 }}
          md={{ span: 6, order: 2 }}
          sm={12}
          xs={12}
        >
          <Alignment align="flex-end">
            <Image src={tgc}></Image>
          </Alignment>
        </ProjectCol>
      </Row>
    </Container>
  );
}
