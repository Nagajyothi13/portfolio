import React, {useRef}from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_89jh8s4', 'template_eng032f', form.current, 'RefQW-TtdRvwDNcNY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nagajyothi879@gmail.com</h5>
            <a href="mailto:nagajyothi879@gmail.com" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+918790821029</h5>
            <a href="https://api.whatsapp.com/send?phone=918790821029" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>
        {/*End of contact options*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message'  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact