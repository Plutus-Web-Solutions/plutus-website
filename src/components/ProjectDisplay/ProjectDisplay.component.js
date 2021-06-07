import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { ProjectDisplayGraphic, ProjectDisplayLinedCircle, ProjectDisplaySolidCircle } from './ProjectDisplay.styles'

export default function ProjectDisplay() {
    return (
        <Container fluid>
            <Row className=" d-flex align-items-center">
                <ProjectDisplaySolidCircle />
                <ProjectDisplayLinedCircle />
                <ProjectDisplayGraphic />
            </Row>
        </Container>
    )
}
