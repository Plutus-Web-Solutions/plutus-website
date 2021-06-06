import styled, {keyframes} from "styled-components";
const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

const antiRotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(-360deg);
}
`


export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 80px);
  @media(max-width: 576px){
    display: flex;
    flex-direction: column;
    align-items; center;

  }

`;


export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  
  padding-left:2em;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left:0em;
    
  }
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 3rem;


  @media screen and (max-width: 768px) {
    text-align:center
    
  }
  
  @media screen and (max-width: 992px) {
    font-size: 2.5rem;

  @media(max-width: 576px){
    font-size: 1.5rem;

  }
`;

export const HeaderSubtitle = styled.div`
  padding: 1em 0;
  font-size: 1.5rem;
  color: grey;
  font-family: Roboto, Helvetica, sans-serif;
`;

export const HeaderButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    @media screen and (max-width: 768px) {
      justify-content: center;
      
    }
`;

export const HeaderButton = styled.button`
    color: black;
    background-color:${props=>props.type==="inverse"?"white":"#9AD3FF"};
    border: ${props=>props.type==="inverse"?"2px solid #9AD3FF":"2px solid white"};
    margin-left: ${props=>props.type==="inverse"?"0.75em":"0"};
    padding: 0.75em;
    border-radius: 3px;
    box-sizing:border-box;

    &:hover{
      
    }
`;

export const HeaderGraphic = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderSolid = styled.div`

  position:absolute;
  width: 70%;
  height: 90%;
  border-radius: 50%;
  background: #9AD3FF;
  transform: rotate(50deg)
  
  
 
`;


export const HeaderLined = styled.div`
position: absolute;
width: 20em;
height: 35em;
border-radius: 50%;
border: 5px dashed #6895FA;
box-sizing: border-box;
transform: rotate(-50deg)
`;


export const HeaderGraphicImg = styled.img`
    width:80%;
    z-index: 1;
    @media screen and (max-width: 992px) {
      width:100%;
    }

    @media screen and (max-width: 768px) {
      width:50%;
    }
    
`;

