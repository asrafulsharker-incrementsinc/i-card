import { Button, Container } from '@mui/material'
import React from 'react'
import './Contact.css'

function Contacts() {
    const contact={
        background: `linear-gradient(180deg, #F9F9F9 0%, #DCE8F5 100%)`,
    }
    const sendBtn={
        borderRadius: `36px`,
background: `linear-gradient(90deg, #FEAF02 10.22%, #F3E3B7 125.62%)`,
        color:`#4B4848`,
        padding:`15px 38px`,
        textTransform:`capitalize`,
        fontSize:`18px`,
        marginTop:`34px`
    }
  return (
    <>
    <div className="" style={contact} id='pricing' id='contact'>
        <div className="contact">
            <Container>
                <div className="" style={{padding:"10% 0%"}}>
                    <p className="contactTextBlock" style={{fontSize:"40px",width:"50%",fontWeight:"700",lineHeight:"49px",color:"#4A4747",letterSpacing:"-2px",textTransform:"capitalize"}}>Get in touch with us if you're  <span style={{color:"#11998E"}}>interested</span>  in learning more about our <span style={{color:"#2AB866"}}>services.</span></p>
                    <div className="contactDownDropBlock" style={{width:"50%"}}>
                        <div className="">
                            <p style={{fontSize:"16px"}}>Subject</p>
                            <input type='text' placeholder='Enter your Subject' style={{border:"none", backgroundColor:"transparent",outline:"none",borderBottom:"0.5px solid #DADBE0",paddingBottom:"8px", width:"100%"}}></input>
                        </div>
                        <div className="">
                            <p style={{fontSize:"16px"}}>Email address</p>
                            <input type='email' placeholder='Enter your Email address' style={{border:"none", backgroundColor:"transparent",outline:"none",borderBottom:"0.5px solid #DADBE0",paddingBottom:"8px", width:"100%"}}></input>
                        </div>
                        <div className="">
                            <p style={{fontSize:"16px"}}>How can we help?</p>
                            <input type='text' placeholder='A brief description here' style={{border:"none", backgroundColor:"transparent",outline:"none",borderBottom:"0.5px solid #DADBE0",paddingBottom:"8px", width:"100%"}}></input>
                        </div>
                        <Button  style={sendBtn}> Send message</Button>
                    </div>
                </div>
            </Container>
        </div>

                 </div>
                 </>
  )
}

export default Contacts