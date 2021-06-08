import React from 'react'
import { WaveImage, 
        Quotes,
        Title,
        SubTitle,
        ContentDiv,
        TestimonialsDiv,
        TestimonialDiv,
        Alignment,
        TestimonialContent,
        TestimonialImage,
        ClientDiv
 } from './Testimonials.styles'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import waveone from "../../assets/wave4.png";
import wavetwo from "../../assets/wave5.png";
import quotes from "../../assets/quotes.png";
import face from "../../assets/face.png"

class Testimonials extends React.Component {
    
    render(){
       
        return (
        <Container style={{height:"100vh"}} fluid>
            <Row>
                <Col xl={6} lg={6} md={2}>
                    <ContentDiv>
                        <div>
                        <Quotes src={quotes}/>
                        </div>
                        <div>
                        <Title>What Our Clients Say About Us.</Title>
                        <SubTitle>Dont stop me now I am having such a good time I am having ball </SubTitle>
                        </div>
                    </ContentDiv>
                   
                </Col>
                
                <Col xl={6} lg={6} md={2}  >
                    <WaveImage big = {false} style={{background:`url(${waveone})`}} className="wave1"/>
                    <WaveImage big = {true} style={{background:`url(${wavetwo})`}} className="wave2"/>
                    <TestimonialsDiv>
                        <Alignment align="end">
                            <TestimonialDiv>
                                <TestimonialContent>
                                Dont stop me now I am having such a good time,
                                I am a shooting star like a good movie man love it 
                            
                                <ClientDiv>
                                - Japnit Kaur Ahuja, CEO of Xcompany
                                </ClientDiv>
                               
                                
                                </TestimonialContent>
                                <TestimonialImage style={{background: `url(${face})`}}/>
                            </TestimonialDiv>
                        </Alignment >

                        <Alignment align="start">
                        <TestimonialDiv>
                                <TestimonialContent>
                                Dont stop me now I am having such a good time,
                                I am a shooting star like a good movie man love it 
                            
                                <ClientDiv>
                                - Japnit Kaur Ahuja, CEO of Xcompany
                                </ClientDiv>
                               
                                
                                </TestimonialContent>
                                <TestimonialImage style={{background: `url(${face})`}}/>
                            </TestimonialDiv>
                        </Alignment>

                        <Alignment align="end">
                        <TestimonialDiv>
                                <TestimonialContent>
                                Dont stop me now I am having such a good time,
                                I am a shooting star like a good movie man love it 
                            
                                <ClientDiv>
                                - Japnit Kaur Ahuja, CEO of Xcompany
                                </ClientDiv>
                               
                                
                                </TestimonialContent>
                                <TestimonialImage style={{background: `url(${face})`}}/>
                            </TestimonialDiv>
                        </Alignment>
                       
                      
                    </TestimonialsDiv>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default Testimonials;