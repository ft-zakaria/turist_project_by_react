import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';
import Trip from '../components/trip/Trip';
import img from '../image/img7.jpg';

export default function Service() {
  return (
    <div>
    <Navbar />
     <Hero 
     cName="hero__service"
     heroImg={img}
     title="Service"
     btnclass="btn__hide"
     />
     <Trip />
     <Footer />
  </div>
  )
}
