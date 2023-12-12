import React from 'react'
import profileImg from '../../assets/my-profile2.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import shapeFour from '../../assets/shape-4.png';

import { FaTwitter, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa'
import CV from '../../assets/resume.pdf'

import './home.css'


const Home = () => {
  return (
    <section className="home" id='home'>
       <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Hello, <span>My Name Is</span>
                </p>

                <h1 className="home__title text-cs">
                    <span>MERCY</span> THADDEUS
                </h1>

                <p className="home__job">
                    <span className="text-cs">I am A</span><b>Web Developer & Content Writer</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile'/>
                    </div>

                    {/* <p className="home__data home__data-one">
                        <span className="text-lg">
                            <span>Web <span className='text-sm'> Developer </span></span>
                        </span>
                    </p> */}

                    {/* <p className="home__data home__data-two">
                        <span className="text-lg">
                        <span> Content <span className='text-sm'>Writer</span></span>
                        </span>
                    </p> */}

                    <img src={shapeFour} alt="" className="shape shape__1" />
                    <img src={shapeFour} alt="" className="shape shape__2" />
                    <img src={shapeFour} alt="" className="shape shape__3" />

                </div>

                <p className="home__text">
                    Welcome to my portfolio! I have a passion for creating modern, functional, responsive, user-friendly and visually appealing websites. <br /> I am also a profound writer! Explore my work and let's collaborate on your next project to build something amazing!
                </p>

                <div className="home__socials">
                    <a href="https://twitter.com/mercythaddeus_/" className="home__social-link">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/mercy-thaddeus-44ab40189" className="home__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://medium.com/@Mercy_Thaddeus/" className="home__social-link">
                        <FaMedium />
                    </a>
                    <a href="https://github.com/ThaddeusMercy" className="home__social-link">
                        <FaGithub />
                    </a>
                </div>

                    <div className="home__btns">
                        <a download='' href={CV} className="btn text-cs">Download CV</a>
                    {/* <a href="" className="hero__link text-cs">My Skills</a> */}
                </div>
            </div>
       </div>
    </section>
  )
}

export default Home