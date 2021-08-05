import React from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";
import Testimonials from "../../components/Testimonials/Testimonials.component";
import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader.component";
import BlueTextDiv from "../../components/BlueTextDiv/BlueTextDiv.component";
import TeamDiv from "../../components/TeamDiv/TeamDiv.component";
export default function AboutUspage() {
  return (
    <>
      <AboutUsHeader />
      <BlueTextDiv
        heading="OUR MISSION"
        text="At plutus we aim tAt plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here.At plutus we aim to fullfill are your agency needs and hereo fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here.At plutus we aim to fullfill are your agency needs and here"
      />
      <ChangingTextBox Bgcolor="white" />
      <TeamDiv />
      <OurServices />
      <ContactUs2 />
      <Footer />
    </>
  );
}
