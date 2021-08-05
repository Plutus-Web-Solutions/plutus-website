import React from "react";
import { Image, HeaderAlignment} from "./PortfolioHeader.styles";
import map from '../../assets/map.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar.component';
import { HeaderTitle, HeaderSubtitle } from "../Header/Header.styles";


export default function PortfolioHeader() {
  return (
    <Container fluid >
        <Row>
          <NavBar></NavBar>
        </Row>

        <Container style={{height: "calc(100vh - 80px)"}}>
       

        </Container>

    </Container>
    
  );
}
