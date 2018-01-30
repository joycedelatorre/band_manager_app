import React from 'react';
import Anime from 'react-anime';
import "./Animetest.css";
 
export const Animetest =() => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  width="100%" height="150" x="0" y="0" viewBox=" 0 0 850 200">
     <Anime easing="easeOutQuad"
           duration={5000}
           loop={false}
           delay={(el, index) => index * 200}
           strokeDashoffset={ (el) => {
                  var pathLength = 0;
                if (el.getTotalLength) {
                  pathLength = el.getTotalLength();
                  el.setAttribute('stroke-dasharray', pathLength);
                            }	
              return [pathLength, 0];
              }}>
                
                
                
                <path className="st1" d="M200,42 C200,42 400,42 800,42 L800,159 L200,159 C200,81 200,42 200,42 Z" id="Path-2"/>
                
                <path className="st1" d="M200,47.3632812 C215.273438,47.3632812 237.061198,65.2486979 265.363281,101.019531 C263.300781,172.980469 268.914062,177.526042 282.203125,114.65625 C295.492188,51.7864583 321.213542,31.2252604 359.367188,52.9726562 C332.476562,151.89974 338.753906,176.63151 378.199219,127.167969 C437.367188,52.9726562 506.128906,60.6992187 498.273438,114.65625 C493.036458,150.627604 536.510417,148.227865 628.695312,107.457031 L768.15625,42"/>
                <path className="st1" d="M426,448v-64"/>
                <path className="st1" d="M464,416a32,32 0 1,0 64,0a32,32 0 1,0 -64,0"/>
                <path className="st1" d="M560,344c0,28,0,104,0,104c32,0,48-4,48-24s-24-20-48-20"/>
                <path className="st1" d="M714,396c0,0,8-12,24-12s21.9,5.6,24,12c4,12-2.3,45.7,4,52c2.2,2.2-0.4-0.4-3.2-3.2c-2.5-2.5-6.5-3.1-9.6-1.2c-3.5,2.1-8.8,4.4-15.2,4.4c-12,0-24-4-24-16s8-20,24-20s25,4,25,4"/>
                <path className="st1" d="M854.8,384h-23.3c-20.2,0-37.1,11.8-36.7,32c0.4,19.5,16.4,32,36,32h24"/>
                <path className="st1" d="M938.5,432c-5.5,9.6-15.9,16-27.7,16c-17.7,0-32-14.3-32-32s14.3-32,32-32c17.7,0,32,14.3,32,32h-44"/>
                
                
      </Anime>
    </svg>
    );




