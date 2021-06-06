import React from "react";
import { OurServicesTitle, OurServicesSubtitle } from "./OurServices.styles";
import laptop from '../../assets/laptop.png'
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar.component';

export default function OurServices() {
  return (
    <Container fluid style={{backgroundColor:"rgba(154,211,255,0.3)"}}>
        <Row style={{padding:"2em"}}>
          <Col lg={12}>
          <OurServicesTitle className="text-center" >How Can We Help?</OurServicesTitle>
          </Col>
          <Col lg={12}>
          <OurServicesSubtitle className="text-center" >We can help cause we are awesome!</OurServicesSubtitle>
          </Col>
          
        </Row>

        <Row className="align-items-center" >
          <Col lg={{span:6, order:1}} md={{span:7, order:1}} sm={{span:12, order:2}} xs={{span:12, order:2}}> 
           
          </Col>
        
          <Col lg={{span:6, order:2}} md={{span:5, order:2}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
            
          </Col>
          
          <Col lg={{span:6, order:2}} md={{span:5, order:2}} sm={{span:12, order:1}} xs={{span:12, order:1}}>
            
          </Col>
        </Row>

    </Container>
    
  );
}
