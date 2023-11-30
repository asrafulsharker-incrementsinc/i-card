import {Button, Container} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'

function Hero() {
    const containerStyle = {
        background: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),
          linear-gradient(90deg, #11998E 0.11%, #38EF7D 99.89%)
        `,

        display: `
        fix
        `,
        alignItems: `center`,

    };

    return (
        <>
            <div className="HeroMain" style={containerStyle}>
                <div className="" style={{display: "flex", alignItems: "center"}}>
                    <Container>
                        <div className="heroRes" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "100vh"
                        }}>
                            <div className="left" style={{}}>
                                <p style={{fontSize: "17px", opacity: "75%", fontWeight: "400", color: "#FFF"}}>Digital
                                    Card an initiative for save paper, save tree</p>
                                <p style={{
                                    fontSize: "40px",
                                    lineHeight: "51px",
                                    letterSpacing: "-2px",
                                    fontWeight: "700",
                                    color: "#FFF"
                                }}>iCard the Smartest Way
                                    To Create & Exchange Your Card </p>
                                <a href='https://ippicardsapp.page.link/zRx8' target='_blank' rel='noopener noreferrer'>

                                    <Button style={{
                                        background: "linear-gradient(90deg, #FEAF02 10.22%, #F3E3B7 100%)",
                                        borderRadius: "26px",
                                        padding: "12px 20px",
                                        color: "#4B4848"
                                    }}>Create My Card Now</Button>
                                </a>
                            </div>
                            <div className="right hergoRight animationHero" style={{height: "100%", display: "flex",position:'relative'}}>

                                <img className="HeroImg" src="/images/hero/mobile.png" style={{paddingTop: "30vh"}} alt=""/>
                                <img className="HeroImg22" src="/images/hero mobile.png" style={{paddingTop: "30vh"}} alt=""/>
                                <img className="HeroImg1" src="/images/hero/1.png" style={{paddingTop: "20vh",width: "250px",height:'65px',position:"absolute",right:"15%"}} alt=""/>
                                <img className="HeroImg2" src="/images/hero/2.png" style={{paddingTop: "35vh",width: "250px",height:'65px',position:"absolute",right:"-10%"}} alt=""/>
                                <img className="HeroImg3" src="/images/hero/3.png" style={{paddingTop: "50vh",width: "250px",height:'65px',position:"absolute",right:"-20%"}} alt=""/>
                                <img className="HeroImg4" src="/images/hero/4.png" style={{paddingTop: "65vh",width: "250px",height:'65px',position:"absolute",right:"-35%"}} alt=""/>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Hero