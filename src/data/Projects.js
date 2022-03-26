// desktop images
import React from 'react'
import Project1 from '../images/desktop-movie-app.png';
import Project2 from '../images/rafting-desktop.png';
import Project3 from '../images/desktop-portfolio.png';
import Project4 from '../images/desktop-foodexplorer.png';
import Project5 from '../images/desktop-shrekgame.png';
import Project6 from '../images/desktop-yummyeats.png';

// mobile images
import MobileProject1 from '../images/mobile-movie-app.png';
import MobileProject2 from '../images/rafting-mobile.png';
import MobileProject3 from '../images/mobile-portfolio.png';
import MobileProject4 from '../images/mobile-foodexplorer.png';
import MobileProject5 from '../images/mobile-shrekgame.png';
import MobileProject6 from '../images/mobile-yummyeats.png';


//images for each project 
        // first image is wireframe of project
        // second is a line of code
        // third is a gif navigating through the live site
import FirstDesignImg from '../images/wireframeExample.png';
import FirstDevImg from '../images/movie-app-code.png';
import FirstLiveSiteImg from '../images/movie-app-gif.gif';

import SecondDesignImg from '../images/wireframeExample.png';
import SecondDevImg from '../images/extremefloats-code.png';
import SecondLiveSiteImg from '../images/rafting-vid.gif';

import ThirdDesignImg from '../images/wireframeExample.png';
import ThirdDevImg from '../images/react-code.png';
import ThirdLiveSiteImg from '../images/portfolio-vid.gif';

import FourthDesignImg from '../images/wireframeExample.png';
import FourthDevImg from '../images/food-explorer-code.png';
import FourthLiveSiteImg from '../images/food-explorer-vid.gif';

import FifthDesignImg from '../images/wireframeExample.png';
import FifthDevImg from '../images/shrek-code.png';
import FifthLiveSiteImg from '../images/shrek-game-vid.gif';

import SixthDesignImg from '../images/wireframeExample.png';
import SixthDevImg from '../images/yummy-eats-code.png';
import SixthLiveSiteImg from '../images/yummy-eats-vid.gif';




const Projects = [
    {
        id: '1',
        name: 'Whats Poppin', 
        desc: 'A dynamic and responsive movie website. Navigate through different movies, and add them to your favorite list so you will remember to watch them later!',
        longDesc:'Whats Poppin is movie database app built using the React Framework. Using the TMDb API, my friend Ryan and I created a dynamic website allowing users to browse through different categories, add movies to a favorites list to make sure users do not forget to watch their favorite movies.',
        img: Project1,
        mobileImg: MobileProject1, 
        date: 'January 2022',
        tools: ["React", "Sass", "GitHub"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'My partner and I designed our wireframes using Adobe XD prior to the development stage. We aimed to create an aesthetic and functional website using neon theme.',
        designImg: FirstDesignImg,
        developmentDesc: 'The most challenging part of this project was grabbing the API from TMDB and display different movies and  properties such as genre, casts, overview etc...',
        developmentImg: FirstDevImg,
        liveSiteDesc: 'The live site for Whats Poppin is up and running! Click on the button below to check it out!',
        liveSiteImg: FirstLiveSiteImg,
        liveSiteLink: 'https://rgstudios.ca/movie-database/',
    },
    {
        id: '2',
        name: 'Extreme Floats', 
        desc: 'A WordPress website for a local rafting company, built using different plugins such as WooCommerce, Booking etc...',
        img: Project2,
        longDesc:'Extreme Floats is a fictitious local rafting tour company that needed an upgrade on their website. My two group members and I were responsible for creating a multi-page ecommerce website using WordPress CMS, and mainly using the WooCommerce plugin.',
        mobileImg: MobileProject2, 
        date: 'Feb 2022',
        tools: ["Wordpress", "Woocommerce", "CSS"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'Our group designed a wireframe for our rafting tour website. We used Figma in order to work collaborately. For our website, our main focus is the functionality because we know that customers prefer being able to book tours right on the website.',
        designImg: SecondDesignImg,
        developmentDesc: 'Since it was a major project, we split tasks in order to work efficiently. One of my main tasks was creating custom post types for things such as staff and taxomonials in order to display them on different pages of the website.',
        developmentImg: SecondDevImg,
        liveSiteDesc: 'Sorry, this is still work in progress! It will be live soon!',
        liveSiteImg: SecondLiveSiteImg,
        liveSiteLink: 'https://extremefloats.bcitwebdeveloper.ca/',
    },
        {
        id: '3',
        name: 'Personal Portfolio', 
        desc: 'Personal portfolio showcasing my work as a web developer. Designed and developed by myself, built mostly using React.',
        img: Project3,
        longDesc:'Utilizing the tools I have learned from the FWD program at BCIT, I was able to create a responsive and simple personal portfolio that showcases my development skills and reflects my personality. It is built using React and other React libraries for fun animating effects.',
        mobileImg: MobileProject3, 
        date: 'March 2022',
        tools: ["React", "Sass", "Javascript"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'From the design perspective of my portfolio, I aimed to create a simple but modern looking website with a bit of personality and creativity mixed into it. For mobile users, I also emphasized on the thumb-driven design by putting the hamburger menu in the bottom right corner of the screen.',
        designImg: ThirdDesignImg,
        developmentDesc: 'One of the challenges that I faced while working on this project was creating the light/dark mode button. It took many hours of looking for resources online, and implementing it into my own project also took some time as I ran into some bugs and errors. ',
        developmentImg: ThirdDevImg,
        liveSiteDesc: 'The live site for my Personal Portfolio is up and running! Click on the button below to check it out!',
        liveSiteImg: ThirdLiveSiteImg,
        liveSiteLink: 'https://ivostudio.ca/portfolio',
    },
    {
        id: '4',
        name: 'Food Explorer', 
        desc: 'A class project which we create a responsive website from scratch, replicating a mockup that was provided to us.',
        img: Project4,
        longDesc:'The Food Explorer project was based around developing a landing page from a provided mockup. Working with two other group members, we used GitHub to work collaborately on a single project.',
        mobileImg: MobileProject4, 
        date: 'April 2022',
        tools: ["HTML", "Sass", "GitHub"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'Our group designed our wireframes using Figma, as it is simple to use and allows us to work collaborately.',
        designImg: FourthDesignImg,
        developmentDesc: 'One of the main takeaways from this project was using variables when styling different elements. It helps keep our Sass code looking organized, and therefore easier to understand when group members are inspecting each others code when using GitHub.',
        developmentImg: FourthDevImg,
        liveSiteDesc: 'The live site for Food Explorer is up and running! Click on the button below to check it out!',
        liveSiteImg: FourthLiveSiteImg,
        liveSiteLink: 'https://ivostudio.ca/food-explorer',
    },
    {
        id: '5',
        name: 'JavaScript Game', 
        desc: 'A small and simple browser game. Your character is Donkey from Shrek, and you have trespassed into his swamp. Play to escape from the ogre!',
        longDesc:'The Shrek Game is a simple browser game inspired by the infamous dinasour game. Utiliizng Object Oriented Programming in JavaScript, users can navigate through the game by simply pressing space to jump, and enter to restart.',
        img: Project5,
        mobileImg: MobileProject5, 
        date: 'May 2022',
        tools: ["JavaScript", "CSS", "HTML"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'For this project, I used a color scheme that is inspired by the beautiful and muddy environment in which the movie character Shrek lives in in the movie "Shrek". I was able to make the background slide to create a "running" effect for the user.',
        designImg: FifthDesignImg,
        developmentDesc: 'The main functionality of my game is to jump upon pressing the space key. After hours of testing, I was finally able to create a jumping animation that is smooth by using object oriented programing, as displayed on my code here.',
        developmentImg: FifthDevImg,
        liveSiteDesc: 'The live site for Shrek Game is up and running! Click on the button below to check it out!',
        liveSiteImg: FifthLiveSiteImg,
        liveSiteLink: 'https://ivostudio.ca/shrek-game/',
    },
    {
        id: '6',
        name: 'Yummy.Eats', 
        desc: 'A simple responsive and aesthetic food search website using visually appealing color schemes and website layout.',
        longDesc:'Yummy.Eats is a website built simply with HTML and CSS. This was one of the first few websites I have created when I started learning HTML and CSS. Although not functional, the overall design and layout is visually appealing and professional.',
        img: Project6,
        mobileImg: MobileProject6, 
        date: 'June 2022',
        tools: ["HTML", "CSS"],
        github: 'github url here',
        viewSite: 'live site url here',
        designDesc: 'The wireframes for this simple website was done on Adobe XD, including mobile and desktop versions of the website.',
        designImg: SixthDesignImg,
        developmentDesc: 'One of the things I have learned from this simple project was writing organized and semantic HTML. When I first started learning HTML, my tags were all over the place. I have since learned to use tags such as section or article in order to group paragraphs together, and make it more organized. ',
        developmentImg: SixthDevImg,
        liveSiteDesc: 'The live site for Yummy.Eats is up and running! Click on the button below to check it out!',
        liveSiteImg: SixthLiveSiteImg,
        liveSiteLink: 'https://ivostudio.ca/yummy-eats/',
    },
];

export default Projects