import { Button, Container } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import './Nav.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox.js";
import MailIcon from "@mui/icons-material/Mail.js";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


function Nav() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ left: open });
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List >
                <div style={{display:"flex",alignItems:'center',justifyContent:'center',flexDirection:"column",marginTop:"20px"}}>
                    <img src="/images/iCard-logo-3 2.png" alt="" />
                    <ScrollLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{width:"100%", textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',textAlign:'center',marginTop:'20px'}}>Home</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',marginTop:'20px'}}>About</ScrollLink>
                    <ScrollLink to="features" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',marginTop:'20px'}}>Features</ScrollLink>
                    <ScrollLink to="testimonials" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',marginTop:'20px'}}>Testimonial</ScrollLink>
                    <ScrollLink to="pricing" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',marginTop:'20px'}}>Pricing</ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer',marginTop:'20px'}}>Contact</ScrollLink>
                    {/* Download Button */}
                    <ScrollLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
                        <Button style={{ backgroundColor: "#14A800", textTransform: "capitalize", color: "#FFF", fontSize: "18px", fontWeight: "600", padding: "10px 20px", borderRadius: "5px" ,marginTop:'20px'}}>
                            Download the APP
                        </Button>
                    </ScrollLink>
                </div>

            </List>

        </Box>
    );
  return (
    <>
        <div className="nav" style={{backgroundColor:"#FFF",paddingTop:"22px",paddingBottom:"22px",position:"fixed",width:"100%",zIndex:"1000"}}>
            <Container>
                <div className="" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <img src="/images/iCard-logo-3 2.png" alt="logo" />
                    <div className="" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
                        {/* Navigation Links with smooth scrolling */}
                       <div className="desktopBar" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>

                           <ScrollLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>Home</ScrollLink>
                           <ScrollLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>About</ScrollLink>
                           <ScrollLink to="features" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>Features</ScrollLink>
                           <ScrollLink to="testimonials" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>Testimonial</ScrollLink>
                           <ScrollLink to="pricing" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>Pricing</ScrollLink>
                           <ScrollLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-70} style={{ textDecoration: "none", fontSize: "16px", fontWeight: "400", color: "#282927" ,cursor:'pointer'}}>Contact</ScrollLink>
                           {/* Download Button */}
                           <ScrollLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
                               <Button style={{ backgroundColor: "#14A800", textTransform: "capitalize", color: "#FFF", fontSize: "18px", fontWeight: "600", padding: "10px 20px", borderRadius: "5px" }}>
                                   Download the APP
                               </Button>
                           </ScrollLink>
                       </div>
                        <div className="mobileMenu">

                            <div>
                                <Button onClick={toggleDrawer(true)} style={{textDecoration:'none',color:"#000"}}>
                                    <MenuIcon />
                                </Button>
                                <Drawer
                                    anchor="left"
                                    open={state.left}
                                    onClose={toggleDrawer(false)}
                                >
                                    {list()}
                                </Drawer>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>
    )
}

export default Nav