import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
               return (
                              <div>
                                
                                      <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
        <div className='text-center'>


          {/* ____________________ navlink _______  */}
        <NavLink  className=" about-btn" to="/home">
            Home
            </NavLink>
                                <NavLink className=" about-btn" to="/about" >
              About
            
            </NavLink>
            
            <NavLink  className=" about-btn" to="/service">
            Service
            </NavLink>
            <NavLink  className=" about-btn" to="/programs">
            Programs
            </NavLink>
            <NavLink  className=" about-btn" to="/faq">
            FAQ
            </NavLink>
            {/* _______________ nav link close ___________  */}
                                </div>
          <div className="col-md-12">
            <h1 className="title text-center">
               KUNG FU HOUSE
            </h1>
            <p className='home-part title text-center'>Best Martial Arts, Kung Fu, Wushu, 
                                                            Wing Chun & Self-Defense <br /> Training Center in Dhaka, Bangladesh</p>
            
          </div>
          <div className="buttons col-md-6">

          </div>
        </div>
      </div>
    </div>   
       
                              </div>
               );
};

export default Header;