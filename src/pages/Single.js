// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { API_KEY } from "../globals/globals";
// import useStickyState from "../hooks/useStickyState";
// import useWindowDimensions from "../hooks/useWindowDimensions";
// import Banner from "../components/Banner";
// import Cast from "../components/Cast";

// function Single() {
//   const { id } = useParams();
//   const [movie, setMovie] = useStickyState(null, `movie-${id}`);
//   const [isLiked, setIsLiked] = useState(false);
//   const { width } = useWindowDimensions();

//   useEffect(() => {
//     const fetchMovie = async () => {
//       if (movie === null) {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
//         );
//         const movieDataFromAPI = await res.json();
//         movieDataFromAPI.isLiked = false;
//         setMovie(movieDataFromAPI);
//       } else {
//         setIsLiked(movie.isLiked);
//       }
//     };
//     fetchMovie();
//   }, [id, movie, setMovie]);

//   const onLikeFn = () => {
//     const makeNewCopy = (movie) => JSON.parse(JSON.stringify(movie));
//     const updatedMovie = makeNewCopy(movie);
//     updatedMovie.isLiked = !updatedMovie.isLiked;
//     setMovie(updatedMovie);
//     setIsLiked(updatedMovie.isLiked);
//   };

//   return (
//     <main className="single-page-main">
//       {movie !== null && (
//         <>
//           <section className="single-banner">
//             <Banner
//               movie={movie}
//               width={width}
//               onLikeFn={onLikeFn}
//               isLiked={isLiked}
//             />
//           </section>
//           <section className="more-details">
//             <Cast id={id} />
//           </section>
//         </>
//       )}
//     </main>
//   );
// }

// export default Single;

import React, { useEffect, useState } from "react";
import Hamburger from "../components/Hamburger";
import { useParams } from "react-router-dom";
import Projects from "../data/Projects";
import {  Link } from "react-router-dom";
import Logo from "../components/Logo";
import { ReactComponent as LeftArrow} from '../images/left-arrow.svg';
import { ReactComponent as RightArrow} from '../images/right-arrow.svg';
import { motion } from "framer-motion";

function Single() {

  const { id } = useParams();
  const [project, setProject] = useState(null);
  
  // const randomProjectNumber = Math.floor(Math.random()* Projects.length + 1);
  

 

  useEffect(() => {
    const data = Projects.filter((item) => item.id === id);
    if (data !== null) {
      setProject(data[0]);
    }
  }, [id]);

  return (
      <main className="single-main">
          <Logo/>
          <Hamburger/>
          <header>
            <a href="/portfolio/work" className='top-work'>Work</a>
          </header>
          <motion.section className="single-project-section" initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 1.3}}>
                    {project !== null && (
                      <>
                        <img src={project.img} className="single-main-img"></img>
                        <h2>{project.name}</h2>
                        <p>{project.date}</p>
                        
                        <ul>
                            {project.tools.map((project, index) => (
                              <li key={index}>{project}</li>
                            ))}
                        </ul>
                        
                        <p>{project.desc}</p>
                        <div className="design-section">
                          <img src={project.designImg} className="designImg"></img>
                          <p>{project.designDesc}</p>
                        </div>
                        <div className="development-section">
                          <img src={project.developmentImg} className="developmentImg"></img>
                          <p>{project.developmentDesc}</p>
                        </div>
                        <div className="liveSite-section">
                          <img src={project.liveSiteImg} className="liveSiteImg"></img>
                          <p>{project.liveSiteDesc}</p>
                        </div>

                      
                      </>
                    )}
            </motion.section>
            <div>
                {project !== null && (
                      <>
                          {/* next and previous projects buttons */}
                          <div className="nextPrevBtns">
                            <Link to={`/project/${Projects[parseInt(project.id) === 1 ? Projects.length - 1 : parseInt(project.id) - 2].id}`} className="prevBtn"><LeftArrow className="leftArrow" animate={{scale:0.5}} transition={{duration:2}}/></Link>
                            <Link to={`/project/${Projects[parseInt(project.id) === Projects.length ? 0 : parseInt(project.id)].id}`} className="nextBtn"><RightArrow className="rightArrow"/></Link>
                        </div>

                      </>
                    )}
            </div>             

      </main>
  );
}

export default Single;

