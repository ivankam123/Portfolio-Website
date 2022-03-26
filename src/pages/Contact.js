import React, { useEffect} from "react";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";

//import libraries
import { motion } from "framer-motion";

//import social media logos
import { ReactComponent as InstaIcon} from '../images/instagram-contact.svg';
import { ReactComponent as LinkedinIcon} from '../images/linkedin-contact.svg';
import { ReactComponent as GithubIcon} from '../images/github-contact.svg';
import { ReactComponent as GmailIcon} from '../images/gmail-contact.svg';



function Contact() {
  // to hide scroll bar because of the cursor animation divs
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);
  return (
    <main className="contact-main">
      <Logo />
      <Hamburger />
      <a href="/portfolio" className='left-home' aria-label="link to home">Home</a>
      <a href="/portfolio/work" className='botleft-home' aria-label="link to work">Work</a>
      <motion.div className="contact" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.5}}>
        <article>
            
              <div className="contact-content">
                  {/* <section>
                      <h4>Want to connect?</h4>
                      <p>If you're interested in working with me email me at <a href="">ivostudio97@gmail.com</a></p>
                    
                  </section> */}
                      
                      {/* animating social media icon */}
                  <section>
                      <h2>Connect with me!</h2>
                      <div className="socialMedia-icons">
                        <motion.a href="" initial={{y:-250, opacity: 0}} animate={{y:0, opacity:1, transition:{delay:0.2}}} transition={{type: 'spring', stiffness:120}} whileHover={{scale: 1.3, originX: 0}} ><GmailIcon className="gmailIcon"></GmailIcon></motion.a>
                        <motion.a href="" initial={{y:-250, opacity: 0}} animate={{y:0, opacity:1, transition:{delay:0.4}}} transition={{type: 'spring', stiffness:120}} whileHover={{scale: 1.3, originX: 0}}><LinkedinIcon className="linkedinIcon"/></motion.a>
                        <motion.a href="" initial={{y:-250, opacity: 0}} animate={{y:0, opacity:1, transition:{delay:0.7}}} transition={{type: 'spring', stiffness:120}} whileHover={{scale: 1.3, originX: 0}}><GithubIcon className="gitIcon"/></motion.a>

                        <motion.a href="" initial={{y:-250, opacity: 0}} animate={{y:0, opacity:1, transition:{delay:1}}} transition={{type: 'spring', stiffness:120}} whileHover={{scale: 1.3, originX: 0}} ><InstaIcon className="instaIcon"/></motion.a>
                        
                      </div>
                      
                  </section>
              </div>
          </article>


        {/* -------------------  corner box animations */}
        {/* <motion.div className="cornerbox contact-box1" animate={{scale:0.5, rotate:180}} transition={{yoyo: Infinity, duration: 2}} ></motion.div>
        <motion.div className="cornerbox contact-box2" animate={{scale: 0.5, rotate:-180}} transition={{yoyo: Infinity, duration: 2}} ></motion.div> */}
        {/* ------------------------------------------ */}

      </motion.div>
    </main>
  );
}

export default Contact;
