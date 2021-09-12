import React, { Component } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

class AboutUspage extends Component {
  constructor() {
    super();
    this.state = {
      path: "",
    };
    this.contactRef = React.createRef();
  }
  componentDidMount() {
    const path = this.props.match.path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
    Aos.init({ duration: 3000 });
  }

  scrollToContact = () => {
    console.log("contact", this.contactRef);
    this.contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <>
        <AboutUsHeader contact={this.scrollToContact} />
        <div data-aos="fade-up">
          <BlueTextDiv
            heading="OUR MISSION"
            text="At plutus we aim tAt plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here.At plutus we aim to fullfill are your agency needs and hereo fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here. At plutus we aim to fullfill are your agency needs and here.At plutus we aim to fullfill are your agency needs and here"
          />
        </div>
        <div data-aos="fade-up">
          <ChangingTextBox Bgcolor="white" />
        </div>
        <div data-aos="fade-up">
          <TeamDiv />
        </div>
        <div data-aos="fade-up">
          <OurServices />
        </div>
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default AboutUspage;
