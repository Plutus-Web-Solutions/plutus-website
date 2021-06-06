import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';


export const ServicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    background-color: #F1F9FF;
    @media(max-width: 768px){

    }
`;

export const ServicesHeading = styled.div`
    font-size: 3em;
    padding: 1em 0 0 0;
    @media(max-width: 768px){
        font-size: 2em;
    }
`;

export const ServicesSubtitle = styled.div`
    font-size: 1.5em;
    padding: 1em 0;
    color: #242323;
    font-family: 'Montserrat', sans-serif;
    @media(max-width: 768px){
        font-size: 0.9em;
    }
`;

export const ServicesCardDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2em 0 0 0;
    .big{
        width: 30%;
        height: 40vh;
    } 
    @media(max-width: 768px){
        height: 60%;
        display: flex;
        flex-direction: column;
        .big{
            width: 60%;
        }
        justify-content: space-around;
    }
`;

export const ServicesCard = styled.div`
border: 1px solid black;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 30vh;
    background-color: white;
    padding: 1em;
    border-radius: 10px;
    @media(max-width: 768px){
        
        width: 40%;
        padding: 1em;
    }
`;

export const  ServicesCardImg = styled.img`
    height: 6em;
    @media(max-width: 768px){
        height: 4rem;
    }
    
`;

export const  ServicesCardTitle = styled.div`
    font-size: 1.3em;
    font-weight: 600;
    @media(max-width: 768px){
        font-size: 1.1em;
    }
`;

export const  ServicesCardSubtitle = styled.div`
    font-size: 1em;
    color: grey;
    text-align: center;
    @media(max-width: 768px){
        font-size: 0.9em;
    }
`;

