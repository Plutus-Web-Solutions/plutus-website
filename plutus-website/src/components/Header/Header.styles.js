import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  padding: 1em 0 1em 2em;
  justify-content: center;
`;

export const HeaderTitle = styled.div`
  width: 90%;
  font-weight: 600;
  font-size: 3rem;
`;

export const HeaderSubtitle = styled.div`
  padding: 1em 0;
  font-size: 1.5rem;
  color: grey;
  font-family: Roboto, Helvetica, sans-serif;
`;

export const HeaderButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 40%;
`;

export const HeaderButtons = styled.button`
    color: black;
    background-color:#9AD3FF;
    border: none;
    padding: 0.6em;
    border-radius: 3px;
`;

export const HeaderGraphic = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const HeaderSolid = styled.div`
position: absolute;
width: 25vw;
height: 90%;
border-radius: 50%;
background: #9AD3FF;
transform: rotate(50deg)
`;

export const HeaderLined = styled.div`
position: absolute;
width: 25vw;
height: 90%;
border-radius: 50%;
border: 5px dashed #6895FA;
box-sizing: border-box;
transform: rotate(-50deg)

`;



export const HeaderGraphicImg = styled.img`
    height: 55%;
    position: absolute;
`;

