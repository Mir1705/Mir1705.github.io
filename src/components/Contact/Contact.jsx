import React from 'react'
import './Contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
    const form=useRef(); 
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_pn4nx1c', 'template_q1fcbcf', form.current, 'ohEgW0_xLvNJBC0QP')
      
        .then((result) => {
            console.log(result.text);
            console.log("send");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <section id='contact'>
      <h5 >Get in touch </h5>
      <h2 style={{textAlign:"center"}}>Contact</h2>
    <form className="inputs container" ref={form} onSubmit={sendEmail} >
      
    <input type="text"  name="name" className=" name"placeholder='Full Name' required/>
   <input type="email" name="email" placeholder='Email' className='emailin' required/>
   <textarea type="text" name='message' placeholder='Your Message' className='send' required></textarea>

  <button type='submit' className=' buttonMes'>Send Message</button>
    </form>
   
    </section>
  )
}

export default Contact;