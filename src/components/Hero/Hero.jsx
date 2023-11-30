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
            <div className="" style={containerStyle}>
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
                            <div className="right hergoRight" style={{height: "100%", display: "flex"}}>
                                <img src="/images/hero mobile.png" style={{paddingTop: "30vh"}} alt=""/>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Hero