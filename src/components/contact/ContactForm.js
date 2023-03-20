import React from 'react';
import './contactForm.css';


export default function ContactForm() {

  return (
    <div className='contact__form'>
        <h1>Send a Masseage to us!</h1>
        <form>
            <input placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input placeholder='Subject' />
            <textarea placeholder='Message' rows='4' />
            <button type="submit">Send Message</button>
        </form>
    </div>
  )
}
