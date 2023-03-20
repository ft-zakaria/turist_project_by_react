import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import AboutUs from '../components/about/AboutUs';
import img from '../image/img8.jpg';

export default function About() {
  return (
    <div>
    <Navbar />
     <Hero 
     cName="hero__about"
     heroImg={img}
     title="About"
     btnclass="btn__hide"
     />
     <AboutUs />
     <Footer />
  </div>
  )
}
