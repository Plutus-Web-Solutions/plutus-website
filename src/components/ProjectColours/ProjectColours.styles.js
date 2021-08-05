import styled, { keyframes } from "styled-components";
export const Heading = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 2em;
  color: black;
  text-align: center;
`;
export const CircleAlignment = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Circle = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 4em;
  background: linear-gradient(rgba(252, 96, 143, 0.52), rgba(252, 96, 143, 1));
  opacity: 0.6;
`;
