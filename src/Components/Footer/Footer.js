import React from 'react';
import './Fotter.css'

const Footer = () => {
               return (
                              // _____________ footer __________ 
                              <div className="footer text-center align-items-center justify-content-center">
                                    
                                    <h1>STAY UPDATED</h1>
                                    <input className="search" type="text" placeholder='Enter Your email' />
                                    <button className='button m-4'> Submit</button>
                                    <p>
                                    © 2021 kung fu house
                                    </p>
                                    <p> Proudly created with pHero.com</p>
                                    <small>Tanisha Tasnin Kona</small>     
                              </div>
               );
};

export default Footer;