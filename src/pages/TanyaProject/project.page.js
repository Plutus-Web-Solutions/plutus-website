import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";
import Testimonials from "../../components/Testimonials/Testimonials.component";
import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";
import PortfolioHeader from "../../components/PortfolioHeader/PortfolioHeader.component";
import IndividualProject from "../../components/IndividualProject/IndividualProject.component";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader.component";
import ProjectColours from "../../components/ProjectColours/ProjectColours.component";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider.component";
import TechUsed from "../../components/TechUsed/TechUsed.component";
import ChallengesDiv from "../../components/ChallengesDiv/challengesDiv.component";
import tanya from "../../assets/tanyatwodevice3.png";
import image from "../../assets/tanyatwodevice4.png";
import phone1 from "../../assets/tanyaphone4.png";
import phone2 from "../../assets/tanyaphone3.png";
import Aos from "aos";
import "aos/dist/aos.css";

class TanyaProject extends Component {
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
        <ProjectHeader
          title="Tanya M Arora"
          subtitle="High-end Fashion Boutique Website"
          contact={this.scrollToContact}
          image={tanya}
        />
        <div data-aos="fade-up">
          <ProjectColours
            colors={[
              "linear-gradient(rgba(71, 20, 61, 0.50), rgba(71, 20, 61, 1))",
              "linear-gradient(rgba(174,92,0, 0.50), rgba(174,92,0,  1))",
              "linear-gradient(rgba(107,102,102, 0.50), rgba(107,102,102,  1))",
            ]}
          />
        </div>

        <div data-aos="fade-up">
          <ProjectSlider image={image} />
        </div>
        <div data-aos="fade-up">
          <ChallengesDiv images={[phone1, phone2]} />
        </div>

        <TechUsed />
        <ContactUs2 />
        <div ref={this.contactRef}>
          <Footer />
        </div>
      </>
    );
  }
}

export default TanyaProject;
