import React from 'react'
import { ProjectDisplayGraphic,
        ProjectDisplayLinedCircle, 
        ProjectDisplaySolidCircle, 
        ProjectDisplayContent,
        ProjectDisplayDiv,
        ProjectDisplayLink,
        ProjectDisplaySubTitle,
        ProjectDisplayTitle,
        ProjectDisplayImage,
        ProjectDisplayProgress, 
        ProjectDisplayArrow
 } from './ProjectDisplay.styles'
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import laptop from '../../assets/laptop.png'
import arrow from "../../assets/Arrow.png";

class ProjectDisplay extends React.Component {
    render(){
        return (
        <Container fluid style={{height:"100vh"}}>
            <Row>
                <Col xl={3} lg={2} md={2} className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                    <ProjectDisplayArrow src={arrow} style={{transform:"rotate(180deg)"}}/>
                </Col>

                <Col xl={6} lg={8} md={8}  className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                        <ProjectDisplaySolidCircle />
                        <ProjectDisplayLinedCircle />
                        <ProjectDisplayDiv>
                            <ProjectDisplayContent>
                                <div>
                                <ProjectDisplayTitle>
                                    HUSTLE BOSS
                                </ProjectDisplayTitle>

                                <ProjectDisplaySubTitle>
                                    WEBSITE
                                </ProjectDisplaySubTitle>

                                </div>
                                
                                <ProjectDisplayLink>
                                    View Project
                                </ProjectDisplayLink>
                            </ProjectDisplayContent>
                            <ProjectDisplayImage>
                                <ProjectDisplayGraphic src={laptop}/>
                                <ProjectDisplayProgress></ProjectDisplayProgress>
                            </ProjectDisplayImage>
                            
                        </ProjectDisplayDiv>
                        
                </Col>
                
                <Col xl={3} lg={2} md={2} className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                    <ProjectDisplayArrow src={arrow}/>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default ProjectDisplay;