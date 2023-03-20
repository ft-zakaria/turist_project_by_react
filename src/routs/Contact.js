import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import ContactForm from '../components/contact/ContactForm';
import img from '../image/contact.jpg';

export default function Contact() {
  return (
    <div>
    <Navbar />
     <Hero 
     cName="hero__contact"
     heroImg={img}
     title="Contact"
     btnclass="btn__hide"
     />
     <ContactForm />
     <Footer />
  </div>
  )
}
