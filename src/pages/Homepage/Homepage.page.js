import React from 'react'
import Header from '../../components/Header/Header.component'
import OurServices from '../../components/OurServices/OurServices.component'
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay.component'
import ChangingTextBox from '../../components/ChangingTextBox/ChangingTextBox.component'
import Testimonials from '../../components/Testimonials/Testimonials.component'
import ContactUs from '../../components/ContactUs/ContactUs.component'
import Footer from '../../components/Footer/Footer.component'
import ContactUs2 from '../../components/ContactUs2/Testimonials.component'

export default function Homepage() {
    return (
        <>
          <Header />
          <OurServices />
          <ProjectDisplay />
          <ChangingTextBox Bgcolor="rgba(154,211,255,0.3)"/>
          {/* <Testimonials/>
          <ContactUs /> */}
          <ContactUs2/>
          <Footer />
        </>
    )
}
