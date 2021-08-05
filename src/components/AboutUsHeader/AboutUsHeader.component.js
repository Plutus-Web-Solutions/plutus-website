import React from "react";
import { Image, HeaderAlignment } from "./AboutUsHeader.styles";
import laptop from "../../assets/laptop.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../NavBar/NavBar.component";
import { HeaderTitle, HeaderSubtitle } from "../Header/Header.styles";
import person1 from "../../assets/persongraphic1.png";
import person2 from "../../assets/persongraphic2.png";
import person3 from "../../assets/persongraphic3.png";
import person4 from "../../assets/persongraphic4.png";
import icon1 from "../../assets/aboutusicon (1).png";
import icon2 from "../../assets/aboutusicon (3).png";
import icon3 from "../../assets/aboutusicon (4).png";
import icon4 from "../../assets/aboutusicon (5).png";
import icon5 from "../../assets/aboutusicon (6).png";
import icon6 from "../../assets/aboutusicon (7).png";
import icon7 from "../../assets/Github.png";

export default function AboutUsHeader() {
  return (
    <Container fluid>
      <Row>
        <NavBar></NavBar>
      </Row>

      <Container style={{ height: "calc(50vh - 80px)" }}>
        <Row style={{ height: "60%" }}>
          {/* <Col lg={3} className="d-flex align-items-center justify-content-center">
              <Image src={icon1} animate={2} type="icon"/>
              <Image src={icon6} animate={1}  type="icon"/>
              <Image src={person1} animate={3} />
              <Image src={icon4} animate={1}  type="icon" />
              <Image src={icon7} animate={2}  type="icon"/>
            </Col> */}
          <Col lg={12}>
            <HeaderAlignment>
              <HeaderTitle>About Us</HeaderTitle>
              <HeaderSubtitle>
                We are a team of four amazing people!
              </HeaderSubtitle>
            </HeaderAlignment>
          </Col>
          {/* <Col lg={3} className="d-flex align-items-center justify-content-center">
              <Image src={icon6} animate={2}  type="icon"/>
              <Image src={icon2} animate={1}  type="icon"/>
              <Image src={person2} animate={3}/>
              <Image src={icon4} animate={1} type="icon" />
              <Image src={icon5} animate={2}  type="icon"/>
            </Col> */}
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
      </Container>
    </Container>
  );
}
