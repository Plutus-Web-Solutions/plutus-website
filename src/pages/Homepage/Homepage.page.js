import React from 'react'
import Header from '../../components/Header/Header.component'
import OurServices from '../../components/OurServices/OurServices.component'
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay.component'
import ChangingTextBox from '../../components/ChangingTextBox/ChangingTextBox.component'
import Testimonials from '../../components/Testimonials/Testimonials.component'
import ContactUs from '../../components/ContactUs/ContactUs.component'
import Footer from '../../components/Footer/Footer.component'

export default function Homepage() {
    return (
        <>
          <Header />
          <OurServices />
          <ProjectDisplay />
          <ChangingTextBox />
          <Testimonials/>
          <ContactUs />
          <Footer />
        </>
    )
}
