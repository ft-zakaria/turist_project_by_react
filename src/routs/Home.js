import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import img from '../image/home1.jpg';
import Destination from '../components/destination/Destination';
import Trip from '../components/trip/Trip';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
       <Hero 
       cName="hero"
       heroImg={img}
       title="Your Journy Your Story"
       desc="Choose Your Favorite Destination"
       battoText="Travel Plan"
       url="/" 
       btnclass="btn__show"
       />
       <Destination />
       <Trip />
       <Footer />
    </div>
  )
}
