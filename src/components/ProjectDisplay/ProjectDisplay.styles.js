import styled from "styled-components";

export const ProjectDisplayArrow = styled.img`
   width:4em;
`;



export const ProjectDisplaySolidCircle = styled.div`
    height: 25em;
    width: 25em;
    border-radius: 100%;
    background-color: rgba(173, 220, 255, 0.9);
    z-index:1;
    position:absolute;
    margin-right: 10em;
    
`;

export const ProjectDisplayLinedCircle = styled.div`
    height: 25em;
    width: 25em;
    border-radius: 100%;
    border: 5px dashed #92AAFF;
    margin-left:10em;
    position:absolute;
    
`;

export const ProjectDisplayDiv= styled.div`
    z-index:2;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;

`;

export const ProjectDisplayImage= styled.div`
    width:70%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:flex-end;
`;

export const ProjectDisplayContent= styled.div`
    width:30%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    padding-top: 4em;
`;

export const ProjectDisplayGraphic = styled.img`
    width:100%;
    z-index:2;
    margin-bottom: 1em;
`;

export const ProjectDisplayProgress = styled.div`
    width:50%;
    height: 0.25em;
    background-color: grey;
`;


export const ProjectDisplayTitle= styled.div`
    line-height: 90%;
    font-weight: 600;
    font-size: 3em;
`;

export const ProjectDisplaySubTitle = styled.div`
    font-size: 2em;
`;

export const ProjectDisplayLink= styled.div`
    font-size:1.5em;
   
`;


