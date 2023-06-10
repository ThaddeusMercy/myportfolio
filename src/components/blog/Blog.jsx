import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from "../../assets/blog1.jpg"
import Blog2 from "../../assets/blog2.jpg"
import Blog3 from "../../assets/blog3.jpg"

import './blog.css'

const Blog = () => {
  return (
    <section className="blog section" id="section">
        <h2 className="section__title text-cs">Latest Blogs</h2>
        <p className="section__subtitle">
            My <span>Articles</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">March 15, 2023</span>
                <h3 className="blog__title">Peeling Back the Layers of the Blockchain: What Lies Beneath?</h3>
                <p className="blog__description">The fact that Blockchain technology does away with the need for middlemen, means they’re expected to provide a high level of security, scalability and of course be decentralized — as this is...</p>

                <a href="" className="link">
                    Read More
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog1} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">May 20, 2020</span>
                <h3 className="blog__title">NETLIFY Depliyment: failed with React.js</h3>
                <p className="blog__description">I recently built a web-app with React.js and tried deploying to Netlify. This wasn’t my first time using Netlify, but for some reasons I kept getting the error “failed to deploy”. I spent a...</p>

                <a href="" className="link">
                    Read More
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog2} alt="" className="blog__img" />
            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">Jan 16, 2023</span>
                <h3 className="blog__title">Influence of AI on Web3</h3>
                <p className="blog__description">Blockchain X AI — A partnership that could potentially drive the next big evolution I’ve come across a number of posts that try to drive a competition between Blockchain and AI — as though these two are to...</p>

                <a href="" className="link">
                    Read More
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                <img src={Blog3} alt="" className="blog__img" />
            </div>
        </div>
    </section>
  )
}

export default Blog