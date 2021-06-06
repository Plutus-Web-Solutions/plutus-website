import React from 'react'
import Header from '../../components/Header/Header.component'
import NavBar from '../../components/NavBar/NavBar.component'
import Services from '../../components/Services/Services.component'

export default function Homepage() {
    return (
        <div>
          <NavBar />  
          <Header />
          <Services />
        </div>
    )
}
