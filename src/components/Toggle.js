import React from 'react'
// importing the sun and moon logos for the button
import { ReactComponent as SunIcon} from '../images/sun.svg';
import { ReactComponent as MoonIcon} from '../images/moon.svg';
import { motion } from "framer-motion";

export const Toggle = ({ theme, toggleTheme}) => {
    // console.log(theme);
  return (
    // if theme is light then show sun icon, else show moon icon
    <motion.div onClick={toggleTheme} aria-label="toggle light mode dark mode" className="toggleBtn" whileHover={{scale: 1.2, originX: 0}}>{ theme === 'light' ? <SunIcon className='sunIcon'/> : <MoonIcon className='moonIcon'/>}</motion.div>
  )
}
