import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import About from '../About/About'
import CTASection from '../CTASection/CTASection'
import Service from '../Service/Service'
import HappyClient from '../HappyClient/HappyClient'
import Pricing from '../Pricing/Pricing'
import Interest from '../Interest/Interest'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import RegisterForm from "../Test/Test.jsx";
import LoginForm from "../Test/Test2.jsx";



function Home() {
  return (
    <>
        <div className="home" id="#home">
            <Nav/>
            <Hero/>
            <About/>
            <CTASection/>
            <Service/>
            <HappyClient/>
            <Pricing/>
            <Interest/>
            <Contacts/>
            <Footer/>
            {/*<RegisterForm/>*/}
            {/*<LoginForm/>*/}
        </div>
    </>

    )
}

export default Home