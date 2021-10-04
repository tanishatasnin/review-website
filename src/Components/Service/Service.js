import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';


const Service = () => {
               
               const [courses ,setProducts] =useState([])

               useEffect(()=>{
                              fetch('./data.JSON')  
                              .then(res=>res.json())   
                              .then(data=>setProducts(data))  
                      },[])
               return (
                              <div>
                                     <div className="container home ">
                                                    <h1 className='text-center'>All Karate course</h1>
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