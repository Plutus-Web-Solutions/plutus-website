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
        ClientDiv,
        
 } from './Testimonials.styles'

 import {
    ContactUsDetailsDiv,
    ContactUsDiv,
    ContactUsFormDiv,
    ContactUsFormHeading,
    ContactUsFormSubtitle,
    ContactUsFormWrapper,
    ContactUsFormInput,
    ContactUsInputWrapper,
    ContactUsRadioButtonsDiv,
    ContactUsRadioInputWrapper,
    ContactUsFormMessageInput,
    ContactUsFormSubmitButton,
    ContactUsFormText
  } from "./ContactUs.styles";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import waveone from "../../assets/wave4.png";
import wavetwo from "../../assets/wave6.png";
import quotes from "../../assets/quotes.png";
import face from "../../assets/face.png"

class ContactUs2 extends React.Component {
    constructor() {
        super();
        this.state = {
          data: {
            name: '',
            email: '',
            message: '',
            address: '',
            service: '',
            phone: ''
          }
        };
      }
      
    render(){
       
        return (
        <Container style={{height:"200vh"}} fluid>
            <WaveImage big = {false} style={{background:`url(${waveone})`}} className="wave1"/>
            <WaveImage big = {true} style={{background:`url(${wavetwo})`}} className="wave2"/>
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
                
            <Row lg={12} style={{height: "100vh"}}>
            <Col lg={12} className="d-flex justify-content-center align-items-center">
                    <ContactUsFormDiv>
                      <ContactUsFormHeading>LET'S TALK</ContactUsFormHeading>
                      <ContactUsFormSubtitle>
                        Any questions or remarks? Or just write us a message
                      </ContactUsFormSubtitle>
                      <ContactUsFormWrapper onChange={this.onChange}>
                        <ContactUsInputWrapper>
                          <ContactUsFormInput type="text" placeholder="Name" name="name" value = {this.state.data.name}/>
                          <ContactUsFormInput
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                            value = {this.state.data.phone}
                          />
                          <ContactUsFormInput
                            type="text"
                            placeholder="Email"
                            name="email"
                            value = {this.state.data.email}
                          />
                          <ContactUsFormInput
                            type="text"
                            placeholder="Adress"
                            name="address"
                            value = {this.state.data.address}
                          />
                        </ContactUsInputWrapper>
                        <ContactUsRadioInputWrapper>
                          <ContactUsFormText> What services do you need? </ContactUsFormText>
                          <ContactUsRadioButtonsDiv>
                            <label htmlFor="web">
                              <input type="radio" id="web" name="service" value="Web Development" 
                              style={{marginRight: "0.5em"}}/>
                              Web Development
                            </label>
                            <label htmlFor="design">
                              <input
                                type="radio"
                                id="design"
                                name="service"
                                value="design"
                                style={{marginRight: "0.5em"}}
                              />
                              Web Design
                            </label>
                            <label htmlFor="graphic">
                              <input
                                type="radio"
                                id="graphic"
                                name="service"
                                value="graphic"
                                style={{marginRight: "0.5em"}}
                              />
                              Graphic Design
                            </label>
                          </ContactUsRadioButtonsDiv>
                        </ContactUsRadioInputWrapper>

                        <ContactUsRadioInputWrapper>
                        <ContactUsFormText> Leave A Message</ContactUsFormText>
                          <ContactUsFormMessageInput
                            type="text"
                            placeholder="Write your message here!"
                            name="message"
                          />
                        </ContactUsRadioInputWrapper>
                        <ContactUsFormSubmitButton onClick={this.onSubmit}>SUBMIT</ContactUsFormSubmitButton>
                      </ContactUsFormWrapper>
                    </ContactUsFormDiv>
           
            </Col>
            </Row>

        </Container>
    )
    }
}

export default ContactUs2;