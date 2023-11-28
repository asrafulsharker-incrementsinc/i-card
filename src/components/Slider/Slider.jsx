import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
  slidesPerView={'auto'}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  loop={true}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
  style={{  paddingBottom:"3%"}}
>


        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider2.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="" style={{display:'flex', backgroundColor: "#000",borderRadius:"20px",padding:"30px",gap:"30px"}}>
                <img src="/images/slider.png" alt="" style={{width:"270px"}}/>
                <div className="" style={{display:"flex",flexDirection:"column",color:"#FFF",textAlign:"left"}}>
                    <div className="" style={{display:'flex',alignItems:'end',justifyContent:"end",width:"100%"}}><img style={{width:"37px"}} src="/images/icons/Quotes.png" alt="" /></div>
                    <p style={{fontSize:"16px", color:"#CDCDCD",lineHeight:"22px",letterSpacing:"0.48px"}}>
                Optio omnis harum eligendi quas. Inventore et nihil. Ut atque tempora minima sed rerum dolores hic quis. Commodi eaque ratione. Repudiandae consequatur ut quis similique.
                </p>
                <p style={{fontSize:"16px",fontWeight:"600",textTransform:"uppercase"}}>Kyle Merwin</p>
                <p style={{color:"#A9A9A9",fontSize:"14px"}}>CO-owner</p>
                </div>
                
            </div>
        </SwiperSlide>
        
      </Swiper>
     

    </>
  );
}
