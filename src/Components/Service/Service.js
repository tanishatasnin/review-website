import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Service.css'


const Service = () => {
               
               const [courses ,setProducts] =useState([])
// _________________ data fetch _____________ 
               useEffect(()=>{
                              fetch('./data.JSON')  
                              .then(res=>res.json())   
                              .then(data=>setProducts(data))  
                      },[])
               return (
                              <div>
                                     <div className="container home ">
                                                    <h1 className='text-center m-4'>All kung fu course</h1>
                              <div className=" row row-cols-1 row-cols-md-2">
                                             {
                                                    courses.map(course=><Cards
                                                    course={course}>

                                                    </Cards>)        
                                             }
                              </div>
                             
                              </div>
                                      
                              </div>
               );
};

export default Service;