import React, { useEffect, useState } from 'react';
import About from '../AboutUs/About';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
               const [courses ,setProducts] =useState([])

               useEffect(()=>{
                              fetch('./data.JSON')  
                              .then(res=>res.json())   
                              .then(data=>setProducts(data))  
                      },[])
               return (
                              <div>
                                             
                                             <div className="container home ">
                                             {/* <About></About> */}
                                             <h1 className='text-center'>our classes</h1>
                              <div className=" row row-cols-1 row-cols-md-2">
                                             {
                                                    courses.slice(0,4).map(course=><Cards
                                                    course={course}>

                                                    </Cards>)        
                                             }
                              </div>
                             
                              </div>
                              
                              </div>
               );
};

export default Home;