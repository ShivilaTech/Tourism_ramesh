import React from 'react'
import './Fotter.css';
import loogo from './pic/shivila.png';
import loogo1 from './pic/trip.png';
import { GrLinkTop } from 'react-icons/gr';

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
const Footer = () => {

  // scroll up 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };


  return (
    <>


      <div className='footerr'>
        <div className='mainFooter'>
          <div className='footerDiv'>
            <div>
              {/* <img src="http://localhost:3000/static/media/trip.4fea631f6816c8755525ba9b719c2d96.svg" alt="" id="aghoriSizeIcons1"/> */}
              <img className='imgf' src={loogo1} alt="Logo" />
            </div>
            <p>Download our App</p>
            <div className='google_app'>
              <img  src="https://www.tataaig.com/s3/google_play_badge_c786de1341.svg" alt="" />
              <br />
              <img  src="https://www.tataaig.com/s3/app_store_696810fe31.svg" alt="" />
            </div>
              {/* <p>Follow Us</p>
              <div style={{}}>
                <img src="https://www.facebook.com/TATAAIGINDIA/" alt="" />
                <img src="https://www.linkedin.com/company/tata-aig" alt="" />
                <img src="https://twitter.com/tataaigindia" alt="" />
                <img src="https://www.instagram.com/tataaigofficial" alt="" />
                <img src="https://www.youtube.com/channel/UCzz6b0_0QZfPnr8TP3Hv6ww" alt="" />
              </div> */}

          </div>
          <div className='footerDiv'>
            <h3>Information</h3>
            <a style={{ textDecoration: "none", color: "black" }} href='/'>Home</a>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/Advanture'>Adventure</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/feeds'>Feeds</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/about'>About us</a></p>
            <p><a style={{ textDecoration: "none", color: "black" }} href='/contact'>Contact us</a></p>


          </div>
          <div className='footerDiv'>
            <h3> Expolre</h3>
            <p> Write a review</p>
            <p>Add a Place</p>
            <p>Join</p>
            <p>Travellers' Choice</p>
            <p>GreenLeaders</p>
          </div>
          <div className='footerDiv'>
            <h3>Do Business With Us</h3>
            <p>Owners & DMO/CVB</p>
            <p>Business Advantage</p>
            <p>Sponsored Placements</p>
            <p>Access our Content API</p>
          </div>
        </div>

      </div>





      <div className='lowerFotter' >
        <a href="https://shivila.com/" target='_blak'
          class="logo">
          <img className='imgf' src={loogo} alt="Logo" />
        </a>
        <div class="copy-right">
          Designed by SHIVILA TECHNOLOGIES PRIVATE LIMITED.
        </div>
      </div>
      {/* <div className='footerr'>
        
        <div className='mainFooter'>
        <div class="lastFooter">
        <div class="lastFooterSuvv">
            <p>Disclaimer</p>
            <p>Terms of Use</p>
            <p>Downloads</p>
            <p>IRDAIGST</p>
            <p>Registration Numbers</p>
            <p>Privacy Policy</p>
            <p>Grievance Redressal Policy</p>
            <p>General</p>
        </div>
        <p>2008, Tata AIG General Insurance Company Limited, all rights reserved.</p>
        <p>Registered Office : Peninsula Business Park, Tower A, 15th Floor, G.K.Marg, Lower Parel, Mumbai - 400 013,
            Maharashtra, India. CINNumber : U85110MH2000PLC128425.</p>
        <p>Registered with IRDA of India Regn. No. 108. Category of Certificate of Registration: General Insurance.
            Insurance is the subject matter of the solicitation.</p>
        <p>For more details on benefits, exclusions, limitations, terms and conditions, please read sales brochure /
            policy wording carefully before concluding a sale.</p>
        <p>Toll Free Number : 1800 266 7780 / 1800 22 9966 (only for senior citizen policy holders). Email Id –
            customersupport@tataaig.com.</p>
    </div>
        </div> */}

      {/* </div> */}
      <br />
      <br />
    </>
  )
}

export default Footer