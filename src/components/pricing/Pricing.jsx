import React from 'react'
import shapeFour from "../../assets/shape-4.png";
import { FaCheck, FaArrowRight } from 'react-icons/fa';

import './pricing.css'

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Pricing</h2>
        <p className="section__subtitle">
            My <span>Price Tags</span>
        </p>

        <div className="pricing__container container grid">
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Hourley Basis </span>
                <h3 className="pricing__price"> 39
                    <span> $</span>
                    <em> Hour</em>
                </h3>
                <p className="pricing__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit dolor unde incidunt nisi a maiores.
                </p>
                <ul className="pricing__list">
                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>

                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Content Creation</span>
                    </li>

                    <li className='list__item'>
                        <del>Public Speaking</del>
                    </li>

                    <li className='list__item'>
                        <del>Copywriting</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeFour} alt="" className="shape c__shape" />
            </div>
            
            <div className="pricing__item-wrapper">
                <span className='pricing__label text-cs'>Popular</span>
                <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Freelancing</span>
                <h3 className="pricing__price"> 300
                    <span> $</span>
                    <em> Weekly</em>
                </h3>
                <p className="pricing__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit dolor unde incidunt nisi a maiores.
                </p>
                <ul className="pricing__list">
                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>

                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Content Creation</span>
                    </li>

                    <li className='list__item'>
                    <FaCheck className='list__icon'></FaCheck>
                        <span>Public Speaking</span>
                    </li>

                    <li className='list__item'>
                        <del>Copywriting</del>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeFour} alt="" className="shape c__shape" />
            </div>
            </div>

            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Full Time </span>
                <h3 className="pricing__price"> 1,500
                    <span> $</span>
                    <em> Monthly</em>
                </h3>
                <p className="pricing__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit dolor unde incidunt nisi a maiores.
                </p>
                <ul className="pricing__list">
                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Web Development</span>
                    </li>

                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Content Creation</span>
                    </li>

                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Public Speaking</span>
                    </li>

                    <li className='list__item'>
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Copywriting</span>
                    </li>
                </ul>

                <a href="" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeFour} alt="" className="shape c__shape" />
            </div>
        </div>
    </section>
  )
}

export default Pricing