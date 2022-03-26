import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from '../components/Hamburger';
import Projects from '../data/Projects';
import Logo from "../components/Logo";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import "swiper-bundle/scss";
import 'swiper/scss';
import "swiper/scss/pagination"
import "swiper/scss/scrollbar";
import "swiper/scss/effect-coverflow";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, EffectFlip, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Scrollbar } from "swiper";
SwiperCore.use([Navigation, Pagination]);

function Work(project) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    <main className='work-main'>
        <div className='work-hamburger'>
         <Logo/>
        <Hamburger/>
        </div>
        <header className='work-header'>
          <a href="/portfolio/about" className='topleft-about' aria-label="link to about">About</a>
          <a href="/portfolio" className='top-home' aria-label="link to home">Home</a>
          <a href="/portfolio/contact" className='topright-contact' aria-label="link to contact">Contact</a>
        </header>
        <h2 className="recent-proj-title">Recent Projects</h2>
        {/* main content in slider */}
      <motion.div className='work-swiper-section' initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.3}}>
        {/* swiper effects. Uncomment to change sliding effects */}
            <Swiper
            // effect #1
                          // scrollbar={{
                          //   hide: true,
                          // }}
                          // modules={[Scrollbar]}
                          // className="mySwiper"
                          // loop={true}
              // effect #  2
                          // effect={"coverflow"}
                          // grabCursor={true}
                          // centeredSlides={true}
                          // slidesPerView={"auto"}
                          // loop={true}
                          // pagination={{
                          //   clickable: true,
                          // }}
                          // modules={[ Pagination]}
                          // className="mySwiper"
              //effect # 3 
                        // effect={"flip"}
                        // grabCursor={true}
                        // pagination={true}
                        // navigation={true}
                        // modules={[EffectFlip, Pagination, Navigation]}
                        // className="mySwiper"
                        // loop={true}
              
              //effect #4
                      // pagination={{
                      //   dynamicBullets: true,
                      // }}
                      // modules={[Pagination]}
                      // pagination={{clickable: true}}
                      // loop={true}
                      // className="mySwiper"
              //effect #5
                // effect={"flip"}
                // grabCursor={true}
                // loop={true}
                // pagination={{clickable: true}}
                // navigation={true}
                // modules={[EffectFlip, Pagination, Navigation]}
                // className="mySwiper"
              //effect #6
              slidesPerView={1}
              grabCursor={true}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              aria-label="project slider"
            >
            {Projects.map((project, index) => {
              if (index >= 6) return;
              return (
                <>
                <SwiperSlide className='slidebox' key={project.id}>
                  <div className="main-img-box">
                        <img src={project.img} className="desktop-image" alt={project.name}/>
                        <img src={project.mobileImg} className="mobile-image" alt={project.name}/>
                  </div>
                <div className='slidebox-text'>
                  <h2>{project.name}</h2>

                  <ul className="toolsUsed">
                    {project.tools.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                </ul>

                  <div className="project-desc">
                      <p>{project.desc}</p>
                  </div>
                  <Link className="learnMore" to={`/project/${project.id}`} aria-label="learn more button"><span>Learn More</span></Link>
                </div>
                </SwiperSlide>
                </>
              );

            })}
              
            </Swiper>

      
      </motion.div>
      
    </main>
  )
}

export default Work