import React, { useRef, useState } from "react";
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
import SwiperCore, { Navigation, Pagination } from "swiper";



SwiperCore.use([Navigation, Pagination]);

function Work(project) {
  return (
    <main className='work-main'>
        <div className='work-hamburger'>
         <Logo/>
        <Hamburger/>
        </div>
        <header className='work-header'>
          <a href="/portfolio/about" className='topleft-about'>About</a>
          <a href="/portfolio" className='top-home'>Home</a>
          <a href="/portfolio/contact" className='topright-contact'>Contact</a>
        </header>
      <a href="/portfolio/contact" className='mobile-bot-contact'>Contact</a> {/* for mobile */}
      <motion.div className='work-swiper-section' initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.3}}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[ Pagination]}
              className="mySwiper"
            >
            {Projects.map((project, index) => {
              if (index >= 6) return;
              return (
                <>
                <SwiperSlide className='slidebox' key={project.id}>
                  <div className="main-img-box">
                        <img src={project.img} />
                        <img src={project.img} />
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
                  <Link className="learnMore" to={`/project/${project.id}`}>Learn More</Link>
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