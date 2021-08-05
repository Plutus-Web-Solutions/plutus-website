import React from "react";
import { TeamWrapperDiv, PictureDiv, NameDiv, TitleDiv  } from "./TeamDiv.styles";
import person from '../../assets/person.png'
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar.component';


export default function TeamDiv(props) {
  return (
    <Container fluid style={{marginBottom: "5em"}}>

       <Row>
         <Col lg={3} style={{padding:"0"}}>
           <TeamWrapperDiv>
             <PictureDiv>
                <img src={person} style={{height: "100%"}}/>
             </PictureDiv>
             <NameDiv>
              Japnit Kaur Ahuja
             </NameDiv>
             <TitleDiv>
              CEO HAHA
             </TitleDiv>
           </TeamWrapperDiv>
         </Col>

         <Col lg={3} style={{padding:"0"}}>
           <TeamWrapperDiv>
             <PictureDiv>
                <img src={person} style={{height: "100%"}}/>
             </PictureDiv>
             <NameDiv>
              Japnit Kaur Ahuja
             </NameDiv>
             <TitleDiv>
              CEO HAHA
             </TitleDiv>
           </TeamWrapperDiv>
         </Col>

         <Col lg={3} style={{padding:"0"}}>
           <TeamWrapperDiv>
             <PictureDiv>
                <img src={person} style={{height: "100%"}}/>
             </PictureDiv>
             <NameDiv>
              Japnit Kaur Ahuja
             </NameDiv>
             <TitleDiv>
              CEO HAHA
             </TitleDiv>
           </TeamWrapperDiv>
         </Col>

         <Col lg={3} style={{padding:"0"}}>
           <TeamWrapperDiv>
             <PictureDiv>
                <img src={person} style={{height: "100%"}}/>
             </PictureDiv>
             <NameDiv>
              Japnit Kaur Ahuja
             </NameDiv>
             <TitleDiv>
              CEO HAHA
             </TitleDiv>
           </TeamWrapperDiv>
         </Col>
       </Row>

    </Container>
    
  );
}
