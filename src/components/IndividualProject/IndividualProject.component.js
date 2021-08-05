import React from "react";
import { Image, Line, Alignment, ContentDiv, ProjectTypeHeading, CompanyNameHeading, ProjectDescription, ViewProject} from "./IndividualProject.styles";
import project from '../../assets/project.png'
import projectleft from '../../assets/projectleft.png'
import { Container, Row, Col, } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar.component';

export default function IndividualProject(props) {
  return (
    <Container fluid style={{padding:"0px"}} style={{height:"200vh"}}>

       <Row>
         <Col lg={{offset:1, span:5}} className="d-flex justify-content-center">
           <ContentDiv>
           <ProjectTypeHeading>Web Design</ProjectTypeHeading>
           <CompanyNameHeading>Company Name</CompanyNameHeading>
           <ProjectDescription>
           Dont stop me now I am having such a good time,
            I am a shooting star like a tiger defying the laws 
            of gravity. I am like a lafy givoca, no one is stopp 
            me, I am burn in the through fire 200 degrees the
            why they call me Mr. Farehnity, I am travelling at 
            speed of light I am a super sonic mad at you 

           </ProjectDescription>
           
            <ViewProject> <Line/> view project</ViewProject>
            
           </ContentDiv>
         </Col>

         <Col lg={{span:6}} className="d-flex align-items-center">
           <Alignment>
           <Image src={project}></Image>
           </Alignment>
           
         </Col>
       </Row>

       <Row style={{backgroundColor:"#F1F9FF"}}>

         <Col lg={{span:6}} className="d-flex align-items-center" >
           <Alignment type="left">
           <Image src={projectleft}></Image>
           </Alignment>
           
         </Col>

         <Col lg={{offset:1, span:5}} className="d-flex justify-content-center">
           <ContentDiv>
           <ProjectTypeHeading>Web Design</ProjectTypeHeading>
           <CompanyNameHeading>Company Name</CompanyNameHeading>
           <ProjectDescription>
           Dont stop me now I am having such a good time,
            I am a shooting star like a tiger defying the laws 
            of gravity. I am like a lafy givoca, no one is stopp 
            me, I am burn in the through fire 200 degrees the
            why they call me Mr. Farehnity, I am travelling at 
            speed of light I am a super sonic mad at you 

           </ProjectDescription>
           
            <ViewProject> <Line/> view project</ViewProject>
            
           </ContentDiv>
         </Col>
       </Row>


    </Container>
    
  );
}
