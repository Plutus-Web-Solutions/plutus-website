import styled, { keyframes } from "styled-components";

const moveWaveOne = keyframes`
    from{
        background-position-y:0;
    }
    
    to{
        background-position-y:1000px;
    }
`;


export const WaveImage = styled.div`
   width:${props=>props.big?"600px":"300px"};
   height:200vh;
   position:absolute;
   right:0;
   background-repeat: no-repeat;
   z-index:${props=>props.big?"1":"0"};
   animation: ${moveWaveOne};
   animation-duration: ${props=>props.big?"20s":"10s"}; 
   animation-timing-function: linear;
   animation-iteration-count: infinite;
`;


export const Quotes = styled.img`
   height: 5em;
   
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 3rem;

`;

export const SubTitle = styled.div`
  padding: 1em 0;
  font-size: 1.5rem;
  color: grey;
 
`;

export const ContentDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:2em;
`;


export const TestimonialsDiv = styled.div`
    height: 100vh;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index:2;
`;

export const Alignment = styled.div`
    width:100%;
    z-index:2;
    display:flex;
    flex-direction:row;
    justify-content:${props=>props.align==="start"?"flex-start":"flex-end"};
`;

export const TestimonialDiv = styled.div`
    width: 70%;
    background-color: white;
    z-index:2;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    padding: 1em;
    font-size: 1em;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

`;


export const TestimonialContent = styled.div`
  flex:0.9;
`;

export const ClientDiv = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 1em;
`;

export const TestimonialImage = styled.div`
    width: 4em;
    height: 4em;
    border-radius: 4em;
    background-position:center;
    background-repeat: no-repeat;
`;





