import React from "react";
import * as tag from "./challengesDiv.style";
import Subcomponent from "./subcomponent/subcomponent.component";

const ChallengesDiv = () => {
  return (
    <tag.Container>
      <tag.Heading>Challenges</tag.Heading>
      <Subcomponent align="left" num="01" first="yes" />
      <Subcomponent align="right" num="02" first="no" />
    </tag.Container>
  );
};

export default ChallengesDiv;
