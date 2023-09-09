import React from 'react'
import './Fotter.css';
import loogo from './pic/shivila.png';
import loogo1 from './pic/trip.png';
import { GrLinkTop } from 'react-icons/gr';

import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Popupad from './popupad/Popupad';
const Footer = () => {
  // scroll up 
  const [isVisible, setIsVisible] = useState(false);

  const [turn , setTurn] = useState(true)
  const [transformUp, setTransformUp] = useState(false)
 

   const  handlepopup = (()=>{
    setTransformUp(false);
    setTimeout(() => {
      setTurn(false)
    }, 1000);
  })  
 setInterval(() => {
   
  setTransformUp(true);
  setTurn(true);
   }, 5000);

  return (
    <>


      <div className='footerr'>
        <div className='mainFooter'>
          <div className='footerDiv'>
          
          <h3>About Us</h3>
              {/* <div style={{width:'25%'}}>
              In our, we believe that travel has the power to transform lives. It's not just about visiting new places; it's about immersing yourself in new cultures, forming lasting connections, and creating memories that will last a lifetime. We're committed to responsible tourism, and we work closely with local communities to ensure our impact is positive and sustainable.
              </div>  */}

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
      
      <div class="image-grid">
  <div class="grid-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvZ8twlP-g_TMwBe4IQ-y-NQu4P-Sqkkvzq5EW03PbYFf8GSeLBajoxopfSTLpRracNo&usqp=CAU" alt="Image 1" className='footer1' />
  </div>
  <div class="grid-item">
    <img src="https://lh3.googleusercontent.com/QJlZSMW4Jib2Hs5cFmQfDZSZNLL5_pfj0HS2JlddV8vBkUJir704zWtMq-wMsWpNDuhQWVYjnDTyIr6rLo8rGbUwEpBKjSGK6km2Ow=s900" alt="Image 2" className='footer1' />
  </div>
  <div class="grid-item">
    <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/promod-clothing-end-of-season-sale-upto-50-off-ad-delhi-times-21-06-2019.png" alt="Image 3" className='footer1'/>
  </div>
  <div class="grid-item">
    <img src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/08/central-brand-jaipur-one-day-sale-everything-at-50-off-ad-dainik-bhaskar-jaipur-15-07-2017-252x300.jpg" alt="Image 4" className='footer1'/>
  </div>
  
</div>
 
      <br />
      <br />
      <Popupad/>
      {/* { turn && ( 
    <div className="popads">

      <div className="blurForml" style={{transform: transformUp ? 'translateY(-10%)' : 'translateY(100%)' ,transform: transformUp ? 'translateY(-10%)' : 'translateY(100%)' }}>
        <form style={{overflow:'hidden'}}>
          <label style={{overflow:'hidden'}}> 
          <button type="button" style={{fontSize:'250%'  ,fontWeight:'bold', background:'transparent' ,border:'none'  ,float:'top' , display:'flex'}} onClick={() => handlepopup()} >x</button> 
          <img style={{overflow:'hidden' ,objectFit:'fill' ,height:'25%' , width:'100%'}} src='https://cdn2.vectorstock.com/i/1000x1000/72/86/discount-50-percent-off-advertising-vector-9527286.jpg' />
          </label>  
          
       
           
        </form>

      </div>
    </div>
  )}  */}
    </>
  )
}

export default Footer