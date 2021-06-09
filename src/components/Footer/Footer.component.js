import React from "react";
import {
    FooterButton,
  FooterDiv,
  FooterIcon,
  FooterIconDiv,
  FooterNameDiv,
  FooterText,
  PlutusIcon,
  PlutusName,
} from "./Footer.styles";
import plutus from "../../assets/plutus.png";
import git from '../../assets/Github.png';
import twitter from '../../assets/Twitter.png'
import behance from '../../assets/Behance.png';
import dribble from '../../assets/Dribbble.png'

export default function Footer() {
  return (
    <FooterDiv>
      <FooterNameDiv>
        <PlutusIcon src={plutus} />
        <PlutusName>PLUTUS</PlutusName>
      </FooterNameDiv>
      <FooterText>
          Plutus is an amazing company, we got the best people
          in the industry. Plutus is an amazing company, we got
        the best people in the industry. Plutus is an amazing company, we got the best people
          in the industry. Plutus is an amazing company, we got
        the best people in the industry.
      </FooterText>
      <FooterButton>CONTACT US {'>'}</FooterButton>
      <FooterIconDiv>
          <FooterIcon src = {git} />
          <FooterIcon src = {twitter} />
          <FooterIcon src = {behance} />
          <FooterIcon src = {dribble} />
      </FooterIconDiv>
    </FooterDiv>
  );
}
