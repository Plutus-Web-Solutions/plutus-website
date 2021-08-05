import styled, { keyframes } from "styled-components";
export const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;

  font-size: 2.5em;
  margin-bottom: 0.5em;
  color: black;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  width: 80%;
  font-size: 1.5em;
  color: black;
`;

const slideandgrow = keyframes`
    0% { transform: translateX(0px) }
	20% { transform: translateX(-160px) scale(1.5) }
    100% { transform: translateX(-160px) scale(1.5) }
`;

const slider = keyframes`
    0% { transform: translateX(0px); }
	20% { transform: translateX(0px); }
	25% { transform: translateX(0px); }
	45% { transform: translateX(0px); }
	50% { transform: translateX(0px); }
	70% { transform: translateX(0px); }
	75% { transform: translateX(0px); }
	95% { transform: translateX(0px); }
	100% { transform: translateX(0px);  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FirstImage = styled.img`
  /* animation-name: ${slider};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; */
`;

export const SecondImage = styled.img`
  /* animation-name: ${slideandgrow};
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite; */
`;

export const ThirdImage = styled.img`
  /* animation-name: ${slideandgrow};
  animation-duration: 5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite; */
  display: none;
`;
