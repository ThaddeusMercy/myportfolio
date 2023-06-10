import React from 'react'
import { FaTwitter, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer section">
        <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="" className="footer__social-link">
                        <FaTwitter />
                    </a>
                    <a href="" className="footer__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="" className="footer__social-link">
                        <FaMedium />
                    </a>
                    <a href="" className="footer__social-link">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer__copyright text-cs"> 2023<span> All</span> Rights Reserved.</p>

                <p className="footer__copyright text-cs">Developed by <span>Mercy Thaddeus</span></p>
        </div>
    </footer>
  )
}

export default Footer