import { createGlobalStyle } from "styled-components";
import {ReactComponent as WhiteBrush} from '../images/brush-btn-white.svg';


// light mode - dark mode CSS
// elements will change color/background based on the theme
export const GlobalStyles = createGlobalStyle`

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
    }

    a{
        color: ${({ theme }) => theme.text};
    }

    .mobileNavLinks a {
        color: #fff;
    }

    .leftArrow, .rightArrow{
        fill: ${({ theme }) => theme.text};
    }

    .hamburger {
        background: ${({ theme }) => theme.text};
    

  
    &.animate {

        @media (max-width: 950px){
            background: #181717;
        }

        @media (min-width: 950px){
            background: ${({ theme }) => theme.body};
        }
       
     }
  }

  .hamburger::before{ 
    background: ${({ theme }) => theme.text};
  }

  .hamburger::after{ 
    background: ${({ theme }) => theme.text};
  }

  .swiper-pagination-bullet-active{
       background: ${({ theme }) => theme.text};
  }

  // .cornerbox{
  //    background: ${({ theme }) => theme.text};
  // }

  .starBackground span {
    background: ${({ theme }) => theme.text};
    display: ${({ theme }) => theme.display};
  }

  .starBackground span::before {
      background: linear-gradient(90deg, ${({ theme }) => theme.text} , transparent);
      
  }

  .toolsUsed li {
      background: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.body};
  }

  .learnMore::before, .learnMore::after{
      background: ${({ theme }) => theme.buttonColor};
      opacity: ${({ theme }) => theme.opacity}
      
    
  }

  .learnMore{
      border: 2px solid ${({ theme }) => theme.text};
  }

  .singleToolsUsed li{
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }


  .cta-contact {
        color: ${({ theme }) => theme.body};
      }
  }
//   .cta-contact:hover{
//     @media(min-width: 950px){
//         color: ${({ theme }) => theme.text};
//     }
//   }

  .cta-contact img {
        filter:${({ theme }) => theme.filter } ;
  }

  .cursor {
    background: ${({ theme }) => theme.text};
    border: 5px solid ${({ theme }) => theme.text};
    box-shadow: 0 0 3px ${({ theme }) => theme.text},
                0 0 5px ${({ theme }) => theme.text},
                0 0 7px ${({ theme }) => theme.text};
  }

  .swiper-button-next, .swiper-button-prev {
    color: ${({ theme }) => theme.text};
  }

  .work-swiper-section{
    background: ${({ theme }) => theme.borderColor};
  }
  .instaIcon, .linkedinIcon, .gitIcon, .gmailIcon {
    fill: ${({ theme }) => theme.text};
  }

  .design-section, .liveSite-section{
    background: ${({ theme }) => theme.borderColor};
  }
  
  .about {
    background: ${({ theme }) => theme.borderColor};
  }

  .toggleBtn {
    background: ${({ theme }) => theme.borderColor};
  }

.liveSite-text-btn-section a{
    background:${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }

  
  
`;


// colors and variables to use in global styles
export const darkTheme = {
    body: '#FBFCF8',
    text: '#121212',
    display: 'none',
    filter: 'invert(0%) sepia(0%) saturate(162%) hue-rotate(179deg) brightness(104%) contrast(86%)',
    borderColor:    'rgba(0, 0, 0, 0.1)',
    buttonColor: 'rgba(355, 355, 355, 0.09)'
}

export const lightTheme = {
    body: '#302f2f',
    text: '#fff',
    display: 'block',
    filter: 'invert(97%) sepia(0%) saturate(12%) hue-rotate(249deg) brightness(104%) contrast(105%)',
    borderColor: 'rgba(355, 355, 355, 0.09)',
    buttonColor: '#636363',
    opacity: '1'

 

}