import { Container } from '@mui/material'
import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="about" style={{height:"80vh",display:"flex",alignItems:"center",backgroundColor:"#DCE8F5"}} id="about">
        <Container>
            <div className="aboutRes" style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"100px"}}>
                <div className="left about-container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img className="shake-on-hover shake-zoom-on-hover" src="/images/about.png" alt="" width={'100%'} />
                </div>
                <div className="right about-container-right" style={{display:"flex",flexDirection:"column",gap:"8px" , marginTop:"60px" , marginBottom:"60px",width:"90%"}}>
                    <p style={{fontSize:"40px",fontWeight:"700",lineHeight:"49px",letterSpacing:"-2px",color:"#4A4747"}}>Managing Business <span style={{color:"#11998E"}}>Card</span> have never been <span style={{color:"#2AB866"}}>Easier</span></p>
                    <p style={{color:"#4A4747",fontSize:"16px",lineHeight:"30px",letterSpacing:"-0.8px",fontWeight:"400"}}>For business we  exchange our business card. But  unfortunately managing business card is so tough. We just exchange just put it to our wallet or contact book. But when we need, we don’t find that. Do you know we though 82% Business card within a week. That means we spend money for produce garbage and waste.  </p>
                    <p style={{color:"#4A4747",fontSize:"16px",lineHeight:"30px",letterSpacing:"-0.8px",fontWeight:"400"}}><span style={{fontSize:"34px",letterSpacing:"-1.7px",fontWeight:"500"}}>So</span> How was that if within a click you can create, exchange and manage  your card? It’s Fun right, but question is how is it possible? Now it’s very easy, you can do all this things with <span style={{fontSize:"20px", fontWeight:"600",color:"#11998E",letterSpacing:"-1px"}}>iCard.</span> </p>
                </div>
                
            </div>
        </Container>
    </div>
    </>
  )
}

export default About