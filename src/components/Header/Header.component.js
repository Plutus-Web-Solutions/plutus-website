import React from "react";
import {
  HeaderButtonDiv,
  HeaderButtons,
  HeaderDiv,
  HeaderGraphic,
  HeaderGraphicImg,
  HeaderLined,
  HeaderSolid,
  HeaderSubtitle,
  HeaderText,
  HeaderTitle,
} from "./Header.styles";
import laptop from "../../assets/laptop.png";
export default function Header() {
  return (
    <HeaderDiv>
      <HeaderText>
        <HeaderTitle>PLUTUS IS THE BEST IN THE INDUSTRY</HeaderTitle>
        <HeaderSubtitle>That's why you should hire us!</HeaderSubtitle>
        <HeaderButtonDiv>
          <HeaderButtons>CONTACT US</HeaderButtons>
          <HeaderButtons>PORTFOLIO</HeaderButtons>
        </HeaderButtonDiv>
      </HeaderText>
      {/* <HeaderGraphic>
        <HeaderLined />
        <HeaderSolid />
        <HeaderGraphicImg src={laptop} />
      </HeaderGraphic> */}
    </HeaderDiv>
  );
}
