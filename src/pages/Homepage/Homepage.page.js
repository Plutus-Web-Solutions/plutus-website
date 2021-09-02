import React, { Component } from "react";
import Header from "../../components/Header/Header.component";
import OurServices from "../../components/OurServices/OurServices.component";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay.component";
import ChangingTextBox from "../../components/ChangingTextBox/ChangingTextBox.component";
import Testimonials from "../../components/Testimonials/Testimonials.component";
import ContactUs from "../../components/ContactUs/ContactUs.component";
import Footer from "../../components/Footer/Footer.component";
import ContactUs2 from "../../components/ContactUs2/Testimonials.component";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      path: "",
    };
  }
  componentDidMount() {
    const path = this.props.match.path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header />
        <OurServices />
        <ProjectDisplay />
        <ChangingTextBox Bgcolor="rgba(154,211,255,0.3)" />
        <ContactUs2 />
        <Footer />
      </>
    );
  }
}

export default Homepage;
