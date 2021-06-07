import { Col } from "react-bootstrap";
import styled from "styled-components";



export const OurServicesTitle = styled.div`
  font-weight: 600;
  font-size: 3.5rem;

  @media screen and (max-width: 768px) {
    text-align:center
    
  }
  
  @media screen and (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

export const OurServicesSubtitle = styled.div`
  padding: 0.5em 0;
  font-size: 2rem;
  color: grey;
  // font-family: Roboto, Helvetica, sans-serif;
`;

export const ServiceCard = styled.div`
  text-align: center; 
  background-color: white;
  width: 80%;
  height: 80%;
  border-radius: 10px;
  padding: 0.7em;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media(max-width: 768px){
    width: 70%;
    margin: 0 0 1em 0;
  }
`

export const ServicesCardBig = styled(ServiceCard)`
  width: 100%;
  height: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  @media(max-width: 768px){
    width: 80%
  }

`

export const  ServicesCardImg = styled.img`
    height: 8em;
    @media(max-width: 768px){
      height: 4rem;
    }
`;

export const ServicesCardImgBig = styled(ServicesCardImg)`
    height: 12em;
    @media(max-width: 768px){
      height: 6rem;
    }
`

export const  ServicesCardTitle = styled.div`
    font-size: 1.3em;
    font-weight: 600;
    @media(max-width: 768px){
        font-size: 1.1em;
    }
`;

export const ServicesCardTitleBig = styled(ServicesCardTitle)`
    font-size: 1.6em;
    @media(max-width: 768px){
      font-size: 1em;
  }
`;

export const  ServicesCardSubtitle = styled.div`
    font-size: 1em;
    color: grey;
    @media(max-width: 768px){
        font-size: 0.9em;
    }
`;

export const ServicesCardSubtitleBig = styled(ServicesCardSubtitle)`
    font-size: 1.2em;
    @media(max-width: 768px){
      font-size: 0.9em;
  }
`



