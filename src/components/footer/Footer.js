import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaBehance, FaTwitter } from "react-icons/fa";

export default function Footer() {

  return (
    <div className='footer'>
        <div className='footer__top'>
            <div className='footer__logo'>
                 <h1>Trippy</h1>
                 <p>Choose your favorurite destination.</p>
            </div>

            <div className='footer__social__icon'>
                <a href="/"><FaFacebookF /></a>
                <a href="/"><FaInstagram /></a>
                <a href="/"><FaBehance /></a>
                <a href="/"><FaTwitter /></a>
            </div>
        </div>

        <div className='footer__bottom'>
             <div className='footer__nav'>
                 <h4>Project</h4>
                 <a href="/"> Changelog </a>
                 <a href="/"> Status </a>
                 <a href="/"> License </a>
                 <a href="/"> All Versions </a>
             </div>

              <div className='footer__nav'>
                 <h4>Community</h4>
                 <a href="/"> Github </a>
                 <a href="/"> Issues </a>
                 <a href="/"> Project </a>
                 <a href="/"> Twitter </a>
             </div>

             <div className='footer__nav'>
                <h4>Help</h4>
                <a href="/"> Support </a>
                <a href="/"> Troubleshooting </a>
                <a href="/"> Contact Us </a>
             </div>

             <div className='footer__nav'>
                <h4>Others</h4>
                <a href="/"> Terms of Service </a>
                <a href="/"> Privacy Policy </a>
                <a href="/"> License </a>
             </div>
        </div>
        <div className='footer__widget'>
            <p>@Powered By React</p>
        </div>
    </div>
  )
}
