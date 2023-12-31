import axios from 'axios';
import React, { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'

import './contact.css'

const Contact = () => {
    const [form, setForm ] = useState({name: '', email: '', subject: '', message: '', });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/1a93b6df-b515-41c0-9509-2797836de07c', form).then((response) => {
            console.log(response);
            // Clearing form filed
            setForm({name: '', email: '', subject: '', message: ''});
        });
    };

  return (
    <section className="contact section" id="contact">
         <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">
            Send <span>A Message</span>
        </p>
 
        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegMap />
                    </span>

                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-data">Lagos, Nigeria</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-data">Available</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">mercythaddeus234@gmail.com</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>

                    <h3 className="contact__card-title">Phone</h3>
                    <p className="contact__card-data">+2348082712941</p>
                </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Full Name   <b>*</b>
                        </label>
                        <input 
                            type="text" 
                            name='name' 
                            onChange={handleChange} 
                            value={form.name} 
                            className="contact__form-input"
                         />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Email Address   <b>*</b>
                        </label>
                        <input 
                            type="email" 
                            name='email' 
                            onChange={handleChange} 
                            value={form.email} 
                            className="contact__form-input" 
                        />
                    </div>
                </div>

                <div className="contact__form-div">
                    <label  className="contact__form-tag text-cs">
                        Subject   <b>*</b>
                    </label>
                    <input 
                        name='subject' 
                        onChange={handleChange} 
                        value={form.subject}  
                        type="text" 
                        className="contact__form-input" 
                    />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label  className="contact__form-tag text-cs">
                        Your Message  <b>*</b>
                    </label>
                    <textarea 
                        name='message' 
                        onChange={handleChange} 
                        value={form.message} 
                        className='contact__form-input'>
                    </textarea>
                </div> 

                <div className="contact__submit">
                    <p>Thank you for your message!</p>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact