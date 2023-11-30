import Hero from '../Hero/Hero'
import About from '../About/About'
import CTASection from '../CTASection/CTASection'
import Service from '../Service/Service'
import HappyClient from '../HappyClient/HappyClient'
import Interest from '../Interest/Interest'
import Contacts from '../Contacts/Contacts'


function Home() {
    return (
        <>
            <div className="home" id="#home">

                <Hero/>
                <About/>
                <CTASection/>
                <Service/>
                {/*<HappyClient/>*/}
                {/*<Interest/>*/}
                {/*<Contacts/>*/}

                {/*<RegisterForm/>*/}
                {/*<LoginForm/>*/}
            </div>
        </>

    )
}

export default Home