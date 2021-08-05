import styled from 'styled-components'


export const ContactUsFormDiv = styled.div`
    background-color:white;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    z-index:3;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 2em 3em;
    height: 90%;
   
`;


export const ContactUsFormHeading = styled.div`
font-size: 2em;
color: black;

`;

export const ContactUsFormSubtitle = styled.div`
    text-align: center;
    color: grey;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
`;

export const ContactUsFormText = styled.div`
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    font-weight: 600;
    margin-bottom: 0.5em;
`;


export const ContactUsFormWrapper = styled.form`
    width: 100%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:flex-start;
    flex-wrap: wrap;
    
  
`;

export const ContactUsInputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const ContactUsFormInput = styled.input`
    width: 40%;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 0.5em;
`;

export const ContactUsRadioInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const ContactUsRadioButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`;

export const ContactUsFormMessageInput = styled.textarea`
    width: 100%;
    border: none;
    background-color: #F1F9FF;
    padding: 1em;
    
`;

export const ContactUsFormSubmitButton = styled.button`
    padding: 0.8em;
    margin-top: 0.8em;
    color: white;
    background-color: #92B4FF;
    border: none;
    align-self:center;
  
`;




