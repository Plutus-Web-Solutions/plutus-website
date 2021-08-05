import React from "react";
import map from '../../assets/map.png'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar.component';
import { HeaderTitle, HeaderSubtitle } from "./ProjectHeader.styles";
import { Image, Line, Alignment, ContentDiv, ProjectTypeHeading, CompanyNameHeading, ProjectDescription, ViewProject} from "../IndividualProject/IndividualProject.styles"
import project from '../../assets/project.png'
import projectleft from '../../assets/projectleft.png'

export default function ProjectHeader(props) {
  return (
    <Container fluid >
        <Row>
          <NavBar></NavBar>
        </Row>

        <Container style={{height: "calc(50vh - 80px)"}} className="d-flex justify-content-center align-items-center">
          <div>
          <HeaderTitle>{props.title}</HeaderTitle>
          <HeaderSubtitle>{props.subtitle}</HeaderSubtitle>
          </div>
        </Container >

        <Container style={{height: "100vh", backgroundColor:"#F1F9FF"}}>
        <Row>
         <Col lg={{offset:1, span:5}} className="d-flex justify-content-center">
           <ContentDiv>
           <ProjectTypeHeading>UI/UX | Full Prototyping</ProjectTypeHeading>
           <CompanyNameHeading>Web Design Project</CompanyNameHeading>
           <ProjectDescription>
           Dont stop me now I am having such a good time,
            I am a shooting star like a tiger defying the laws 
            of gravity. I am like a lafy givoca, no one is stopp 
            me, I am burn in the through fire 200 degrees the
            why they call me Mr. Farehnity, I am travelling at 
            speed of light I am a super sonic mad at you 

           </ProjectDescription>
           
            <ViewProject> <Line/> view website</ViewProject>
            
           </ContentDiv>
         </Col>

         <Col lg={{span:6}} className="d-flex align-items-center" style={{padding:"0px"}}>
           <Alignment>
           <Image src={project}></Image>
           </Alignment>
           
         </Col>
       </Row>
       </Container>

    </Container>
    
  );
}
