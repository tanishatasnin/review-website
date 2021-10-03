import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
               return (
                              <div>
                                      <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-12">
            <h1 className="title text-center">
               KARATE CLASS
            </h1>
            <p className="text-white text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className=" button-nav  text-center  ">
            <NavLink to="/about">
            <button className=" about-btn">About Us</button>
            </NavLink>
            <NavLink to="/about">
            <button className="mt-3 about-btn">About Us</button>
            </NavLink>
            <NavLink to="/about">
            <button className="mt-3 about-btn">About Us</button>
            </NavLink>
            <NavLink to="/about">
            <button className="mt-3 about-btn">About Us</button>
            </NavLink>
            </div>
            
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