import { Button, Container } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import './Pricing.css'

function Pricing() {

    const pricing={
        background: `linear-gradient(180deg, #F9F9F9 0%, #DCE8F5 100%)`,
    }
  return (
    <>
    <div className="" style={pricing} id='pricing'>
        <div className="pricing">
            <Container>
                <div className="" style={{padding:"10% 0%"}}>
                    <p className="pricingTextBlock" style={{fontSize:"40px",width:"50%",fontWeight:"700",lineHeight:"49px",color:"#4A4747",letterSpacing:"-2px",textTransform:"capitalize"}}>Get the <span style={{color:"#11998E"}}>best</span> pricing for your paperless <span style={{color:"#2AB866"}}>solution</span></p>
                    <div className="pricingBlock" style={{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-between",gap:"24px"}}>

                        <div className="" style={{padding:"40px 32px",backgroundColor:"#FFF",borderRadius:"24px"}}>
                            <div className="" style={{display:"flex", alignItems:'center',gap:"10px"}}>
                                <img src="/images/icons/basic.png" alt="" />
                                <div className="">
                                    <p style={{color:"#6F6C90", fontSize:"18px",fontWeight:"500",marginBlockStart:"0em",marginBlockEnd:"0em"}}>For individuals</p>
                                    <p style={{color:"#170F49", fontSize:"24px", fontWeight:"700",lineHeight:"35px",marginBlockStart:"0em",marginBlockEnd:"0em"}}>Basic</p>
                                </div>
                            </div>
                            <p style={{fontSize:"18px",lineHeight:"30px",color:'#6F6C90'}}>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                            <div className="" style={{display:"flex",alignItems:'center',gap:'5px'}}>
                                <p style={{fontSize:"54px",fontWeight:"700",lineHeight:"66px",marginBlock:"0em"}}>$99</p>
                                <p style={{fontSize:"20px",fontWeight:"500",lineHeight:"22px",color:'#6F6C90'}}>/monthly</p>
                            </div>
                            <p style={{fontSize:"18px",fontWeight:"700",lineHeight:"20px",color:"#170F49"}}>What’s included</p>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>All analytics features</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Up to 250,000 tracked visits</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Normal support</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Up to 3 team members</p>
                            </div>
                            <Button style={{marginTop:'40px',backgroundColor:"#2BBA66",width:"100%",borderRadius:"69px",color:"#FFF",fontSize:"18px",fontWeight:"700",textTransform:"capitalize"}}>Get Started</Button>
                        </div>

                        <div className="middleBox" style={{padding:"40px 32px",backgroundColor:"",borderRadius:"24px"}}>
                            <div className="" style={{display:"flex", alignItems:'center',gap:"10px"}}>
                                <img src="/images/icons/pro.png" alt="" />
                                <div className="">
                                    <p style={{color:"#FFF", fontSize:"18px",fontWeight:"500",marginBlockStart:"0em",marginBlockEnd:"0em"}}>For startups</p>
                                    <p style={{color:"#FFF", fontSize:"24px", fontWeight:"700",lineHeight:"35px",marginBlockStart:"0em",marginBlockEnd:"0em"}}>Pro</p>
                                </div>
                            </div>
                            <p style={{fontSize:"18px",lineHeight:"30px",color:'#FFF'}}>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                            <div className="" style={{display:"flex",alignItems:'center',gap:'5px'}}>
                                <p style={{fontSize:"54px",fontWeight:"700",lineHeight:"66px",marginBlock:"0em",color:"#FFF"}}>$199</p>
                                <p style={{fontSize:"20px",fontWeight:"500",lineHeight:"22px",color:'#FFF'}}>/monthly</p>
                            </div>
                            <p style={{fontSize:"18px",fontWeight:"700",lineHeight:"20px",color:"#FFF"}}>What’s included</p>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#2BBA66",backgroundColor:"#FFF"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px",color:"#FFF"}}>All analytics features</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#2BBA66",backgroundColor:"#FFF"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px",color:"#FFF"}}>Up to 250,000 tracked visits</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#2BBA66",backgroundColor:"#FFF"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px",color:"#FFF"}}>Normal support</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#2BBA66",backgroundColor:"#FFF"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px",color:"#FFF"}}>Up to 3 team members</p>
                            </div>
                            <Button className='middelBtn' style={{marginTop:'40px',backgroundColor:"#2BBA66",width:"100%",borderRadius:"69px",color:"#FFF",fontSize:"18px",fontWeight:"700",textTransform:"capitalize"}}>Get Started</Button>
                        </div>

                        <div className="" style={{padding:"40px 32px",backgroundColor:"#FFF",borderRadius:"24px"}}>
                            <div className="" style={{display:"flex", alignItems:'center',gap:"10px"}}>
                                <img src="/images/icons/enterprice.png" alt="" />
                                <div className="">
                                    <p style={{color:"#6F6C90", fontSize:"18px",fontWeight:"500",marginBlockStart:"0em",marginBlockEnd:"0em"}}>For big companies</p>
                                    <p style={{color:"#170F49", fontSize:"24px", fontWeight:"700",lineHeight:"35px",marginBlockStart:"0em",marginBlockEnd:"0em"}}>Enterprise</p>
                                </div>
                            </div>
                            <p style={{fontSize:"18px",lineHeight:"30px",color:'#6F6C90'}}>Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. </p>
                            <div className="" style={{display:"flex",alignItems:'center',gap:'5px'}}>
                                <p style={{fontSize:"54px",fontWeight:"700",lineHeight:"66px",marginBlock:"0em"}}>$399</p>
                                <p style={{fontSize:"20px",fontWeight:"500",lineHeight:"22px",color:'#6F6C90'}}>/monthly</p>
                            </div>
                            <p style={{fontSize:"18px",fontWeight:"700",lineHeight:"20px",color:"#170F49"}}>What’s included</p>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>All analytics features</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Up to 250,000 tracked visits</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Normal support</p>
                            </div>
                            <div className="" style={{display:'flex',alignItems:'center',gap:"14px"}}>
                                <div className="" style={{width:"26px",height:"26px",borderRadius:"50%",color:"#FFF",backgroundColor:"#2BBA66"}}><CheckIcon style={{padding:"1px"}}/></div>
                                <p style={{fontSize:"18px",fontWeight:"400",lineHeight:"20px"}}>Up to 3 team members</p>
                            </div>
                            <Button style={{marginTop:'40px',backgroundColor:"#2BBA66",width:"100%",borderRadius:"69px",color:"#FFF",fontSize:"18px",fontWeight:"700",textTransform:"capitalize"}}>Get Started</Button>
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    </div>
    </>
  )
}

export default Pricing