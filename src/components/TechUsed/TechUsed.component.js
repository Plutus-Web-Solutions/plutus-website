import React from "react";
import {
  TechDiv,
  TechImg,
  TechUsedDiv,
  TechUsedText,
  TechUsedContainer,
} from "./TechUsed.styles";
import react from "../../assets/react.png";
export default function TechUsed() {
  return (
    <TechUsedDiv>
      <TechUsedText>Technologies Used</TechUsedText>
      <TechUsedContainer>
        <TechDiv>
          <TechImg src={react} />
          <TechImg src={react} />
          <TechImg src={react} />
          <TechImg src={react} />
          <TechImg src={react} />
        </TechDiv>
      </TechUsedContainer>
    </TechUsedDiv>
  );
}
