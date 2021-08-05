import styled, {keyframes} from "styled-components";

export const Image = styled.img`
    width:80%;
    
`;

export const Alignment = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: ${props=> props.type==="left"?"flex-start":"flex-end"};
    justify-content:center;
    overflow-y: hidden;


`;

export const ContentDiv = styled.div`
    width: 80%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
   
    
`;

export const ProjectTypeHeading = styled.div`
  font-size: 1.25em;
  color: black;
`;

export const CompanyNameHeading = styled.div`
    font-size: 2.5em;
    color: black;
    font-weight: 600;
`;

export const ProjectDescription = styled.div`
  font-size: 1em;
  color: black;
  margin-bottom:1em;

`;

export const Line = styled.div`
  width: 3em;
  height: 0.1em;
  background-color: black;
`;

export const ViewProject = styled.div`
  width: 35%;
  font-size: 0.9em;
  color: black;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
`;





